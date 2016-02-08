<?php
$countries = ['China', 'Canada', 'India'];

foreach($countries as $country){
  echo $country;
}

$student = [
    'name' => 'firstname',
    'email' => 'aefasdf@gad.com',
];

foreach ($student as $key => $value) {
  echo '<br>' . $key . ': ' . $value;
}

function showWelcome($name) {
  echo 'hello world ' . $name;
}

showWelcome('yi');
