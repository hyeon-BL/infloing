function searchInfluencer() {
    // Get the influencer username from the input field
    var influencerUsername = document.getElementById('influencerInput').value;

    // Check if the input is not empty
    if (influencerUsername.trim() !== '') {
        // Create the URL for the new page, for example: analyze.html?q=username
        var url = 'analyze.html?q=' + encodeURIComponent(influencerUsername);

        // Redirect to the new page
        window.location.href = url;
    } else {
        // Show an alert or handle the case where the input is empty
        alert('워너비 계정을 입력해주세요.');
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