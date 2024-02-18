<?php
$username = $_POST['username'];
$previousIp = isset($_COOKIE['user_ip']) ? $_COOKIE['user_ip'] : null;
$currentIp = $_SERVER['REMOTE_ADDR'];

if ($previousIp === $currentIp) {
    /*이전에 같은 사용자가 보낸 계정*/

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $formData2 = $_GET['influencerInput2'] ?? '';
    file_put_contents('target_save_influencer.txt', $formData2 . "->" . $currentIp . PHP_EOL, FILE_APPEND);

    echo 'Data saved successfully';
} else {
    http_response_code(400);
    echo 'Bad Request';
}
} else{
    setcookie('user_ip', $currentIp, time() + (86400*30), '/');
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $formData2 = $_GET['influencerInput2'] ?? '';
        file_put_contents('target_save_influencer.txt', $formData2 . "->" . $currentIp . PHP_EOL, FILE_APPEND);
    
        echo 'Data saved successfully';
    } else {
        http_response_code(400);
        echo 'Bad Request';
    }
}
?>