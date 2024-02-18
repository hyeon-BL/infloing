document.getElementById('submitButton').addEventListener('click', function() {
    // 폼 데이터 가져오기
    var formData1 = new FormData(document.getElementById('form1'));
    var formData2 = new FormData(document.getElementById('form2'));

    // 두 폼의 데이터 중 하나라도 null 값이 있는지 확인
    if (hasNullValues(formData1) || hasNullValues(formData2)) {
        alert('계정이 비어있습니다. \n 본인의 계정과 워너비 인플루언서의 계정 모두 입력해주세요.');
        return;
    }

    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'my_save_influencer.php?' + new URLSearchParams(formData1).toString(), true);
    xhr1.send();
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'target_save_influencer.php?' + new URLSearchParams(formData2).toString(), true);
    xhr2.send();

    xhr2.onreadystatechange = function() {
        if (xhr2.readyState == 4 && xhr2.status == 200) {
            // analyze.html로 리다이렉트
            window.location.href = 'analyze.html';
        }
    };
    
    xhr2.send();
});

function hasNullValues(formData) {
    for (var pair of formData.entries()) {
        if (pair[1] === null || pair[1] === '') {
            return true;
        }
    }
    return false;
}