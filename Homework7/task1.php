<?php

$arr = [1,2,3,4,5];
$result = 0;
foreach ($arr as $item) {
    $result += $arr * $item;
}
echo $result;