<?php

$dom  = new DOMDocument();

$dom->load('songs.xml');
if($dom->validate()){
    echo "This is valid";
}
else{
    echo "not valid";
}
