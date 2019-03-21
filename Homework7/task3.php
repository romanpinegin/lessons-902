<?php
$arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
$day = 4;

foreach ($arr as $key=>$elem) {
    if ($key == $day) {
        echo '<i>'.$elem.'</i><br>';
    } else {
        echo $elem.'<br>';
    }
}
