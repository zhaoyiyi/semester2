/*global window */
window.onload = function () {
    'use strict';
    var inputs = document.querySelector('#inputs');
    inputs.style.display = 'none';

    document.querySelector('form').onsubmit = function () {
        inputs.style.display = 'block';

        function showValue(inputs) {
            inputs.map(function (input) {
                var inputValue = input.value;
                document.querySelector('#' + input.name).innerHTML = inputValue;
                if (!inputValue) {
                    input.focus();
                    input.style.backgroundColor = 'red';
                }
            });
        }
        showValue([this.username, this.password]);
        return false;
    };
};
