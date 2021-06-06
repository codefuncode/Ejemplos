<?php

echo
    "Gender:" .
    "<input name='gender' type='radio' value='female' $female />" .
    "Female" .
    "<input name='gender' type='radio' value='male' $male />" .
    "Male " .
    "<input name='gender' type='radio' value='other' $other />" .
    "Other " .
    "<span class='error'>* $genderErr </span>";
