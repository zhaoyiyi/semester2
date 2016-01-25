//LAB 2 - UNIT TESTING
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

window.onload = function () {
  function test(invalue, expected) {
    var result = checkId(invalue) === expected;
    var output = document.querySelector('#testOutput').innerHTML;
    output += 'Value tested:' + invalue +  'Expected result: ' + expected + ' ==PASSED==';
  }

  document.querySelector('button').onclick = function () {
    test('n123123123', false);
    test('n1223', false);
    test('n12345678', true);
    test(123123123, false);
  };

};
