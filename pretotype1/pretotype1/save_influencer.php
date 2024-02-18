<?php
$file = 'influencer_list.txt';

if (isset($_POST['influencerInput'])) {
    $influencerInput = $_POST['influencerInput'];

    if (filesize($file) == 0) {
        file_put_contents($file, $influencerInput);
    } else {
        $file2 = file_get_contents($file) . "\n" . $influencerInput;
        file_put_contents($file, $file2);
    }

    header('Location: analyze.html');
    exit();
} else {
    // influencerInput이 설정되지 않은 경우 처리
    echo '유효하지 않은 입력입니다.';
}
?>