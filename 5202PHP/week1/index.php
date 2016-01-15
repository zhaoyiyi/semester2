<?php

  $message = "hello world";

  // Constant
  define('GST', 5);

  echo $message . "!!" . GST . '<br />';

  array_map( function($e){
    echo $e + 1 . ', ';
  }, array(1,2,3,4,5) );

  function run($num){
    echo $num . '<br/>';
    return $num == 0 ? "" : run($num -1);
  }
  run(5);
