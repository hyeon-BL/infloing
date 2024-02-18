<?php
$file = 'email_list.txt';

if (filesize($file) == 0) {
    file_put_contents($file, $_POST['userEmail']);
} else {
    $file2 = file_get_contents($file) . "\n" . $_POST['userEmail'];
    file_put_contents($file, $file2);
}

echo 'Thank you';
?>