<?php

$age = array(
    "Peter" => "35",
    "Ben"   => "37",
    "Joe"   => "43",
);

// $age['Peter'] = "35";
// $age['Ben']   = "37";
// $age['Joe']   = "43";

$myJSON = json_encode($age);

echo $myJSON;
