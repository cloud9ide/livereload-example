function writeTime() {
    var timeDiv = document.getElementById('time');
    var message = "The time is now: " + Date.now();
    timeDiv.innerHTML = message;
    setTimeout(writeTime, 1000);
}

window.onload = function() {
    writeTime();
};
