function searchInfluencer() {
    // Get the influencer username from the input field
    var influencerUsername1 = document.getElementById('influencerInput1').value;
    var influencerUsername2 = document.getElementById('influencerInput2').value;

    // Check if the input is not empty
    if (influencerUsername1.trim() !== '' && influencerUsername2.trim() !== ''){
        // Create the URL for the new page, for example: analyze.html?q=username
        var url = 'analyze.html?q=' + encodeURIComponent(influencerUsername2);

        // Redirect to the new page
        window.location.href = url;
    } else {
        // Show an alert or handle the case where the input is empty
        alert('계정이 비어있습니다. \n 본인의 계정과 워너비 인플루언서의 계정 모두 입력해주세요.');
    }
}


// function checkTouchable() {
//     document.body.dataset.touchable = !!window.ontouchstart;
// }

// checkTouchable();

// if (document.body.dataset.touchable === "true") {
//     console.log("Touch events are supported on this device.");
// } else {
//     console.log("Touch events are not supported on this device.");  
// }