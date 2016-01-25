<?php


if( $_REQUEST['username'] == 'yi' ){
  // echo var_dump($_REQUEST, $_SERVER['REQUEST_METHOD']);
  echo "<h1>form information: </h1>";
  foreach ($_REQUEST as $fieldName => $value) {
    echo $fieldName . ': ' . $value . '<br />';
  }
  echo empty($_REQUEST['btnlogin']);
}else{
  echo '<h2>please type "yi" as username to pass server side validation</h2>';
}
