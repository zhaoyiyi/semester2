(function() {
  'use strict';

  document.querySelector('#loginForm').onsubmit = function (){
    var form = Array.prototype.slice.apply(this);
    var isValid = form.map( function(current){
      var result = validate(current);
      displayErr(current, result);
      return result;
    }).indexOf(false)===-1;

    if(isValid){
      xhr({
        method: 'POST',
        url: 'index.php',
        data: new FormData( this )
      })
      .then(function(data){
        document.querySelector('footer').innerHTML = data;
      });
    }else{
      return false;
    }

    
  };


  // Validate a single input field
  function validate(input){
    // Validators
    function usernameValidator(input){
      var regex = /([a-z|0-9])+/ig;
      return regex.test(input.value);
    }
    function passwordValidator(input) {
      return input.value.length > 0;
    }
    function favNumberValidator(input) {
      return input.selectedIndex !== 0;
    }
    var radioValidator = (function () {
      var checked = false;
      return function check(input) {
        if(!checked){
          var radios = document.querySelectorAll('input[name= ' + input.name +']');
          radios = Array.prototype.slice.apply(radios);
          checked = true;

          return radios.reduce( function(prev, current){
            return prev ? prev : current.checked;
          }, false);
        }
        return true;
      };
    })();


    var validators = {
      'username': usernameValidator,
      'password': passwordValidator,
      'favNumber': favNumberValidator,
      'option': radioValidator
    };
    // add inputs to validate here
    function assignValidator(input) {
      var validator = validators[input.name];
      // for inputs don't need validation return ture
      return validator ? validator(input) : true;
    }

    return assignValidator(input);
  }

  // add error display
  function displayErr(input, isValid) {
    var parent = input.parentNode;
    var err = parent.querySelector('p');
    if(!isValid && !err){
      var errNode = document.createElement('p');
      errNode.className = 'label label-danger';
      var errMsg = document.createTextNode('invalid');
      errNode.appendChild(errMsg);
      parent.appendChild(errNode);
    }
    if(isValid && err){
      parent.removeChild(err);
    }
  }

  /**
   * XHR to work with form data
   *
   * @example:
   * xhr({
   *   method: "post",
   *   url: 'someurl.php',
   *   data: someData
   * })
   * .then(function(response){
   * 		// do something
   * })
   *
   */
  function xhr(option) {
    var promise = new Promise( function(resolve, reject){
      var http = new XMLHttpRequest();
      http.onload = function () {
        if(http.status >= 200 && http.status <= 300){
          resolve(http.response);
        }else{
          reject(http.status);
        }
      };
      http.onerror = function () {
        reject(http.status);
      };
      http.open(option.method, option.url, true);
      http.send(option.data && option.data || null);
    });
    return promise;
  }
}());
