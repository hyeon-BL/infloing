<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $formData1 = $_GET['influencerInput1'] ?? '';
    file_put_contents('my_save_influencer.txt', $formData1 . PHP_EOL, FILE_APPEND);
    $formData2 = $_GET['influencerInput2'] ?? '';
    file_put_contents('target_save_influencer.txt', $formData2 . PHP_EOL, FILE_APPEND);
    echo 'Data saved successfully';
} else {
    http_response_code(400);
    echo 'Bad Request';
}
?>