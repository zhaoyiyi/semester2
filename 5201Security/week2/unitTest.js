var checkAge = age =>
  age>=18 && age<=25;

var testAge = (valueIn, expected) => {
  var result = checkAge(valueIn) === expected ? 'pass' : 'fail';
  console.log(`value: ${valueIn}, result: ${result}`);
};

testAge(17, false);
testAge(18, true);
testAge(26, false);
testAge("Eight", false);
testAge("019", false);
