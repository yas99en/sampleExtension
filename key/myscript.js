function changeColor(color) {
    chrome.tabs.executeScript(null, {
        "code": "document.body.style.backgroundColor='" + color + "'"
    });
}

function sendKeyEvent(key) {

    var down = document.createEvent("KeyboardEvent");
    down.initKeyEvent("keydown", true, true, null, false, false, false, false, 9, 0);
    var up = document.createEvent("KeyboardEvent");
    up.initKeyEvent("keyup", true, true, null, false, false, false, false, 9, 0);
    var params = {
        contextID: 0,
        keyData: [down, up],
    };
    chrome.input.ime.sendKeyEvents(params, function() {
        alert("sent: "+key);
    });
}

document.getElementById("red").onclick = function() {
    console.log("onclick");
//    window.setTimeout(function() {
//        alert("timeout");
        sendKeyEvent("R");
//    }, 5000);
    changeColor('red');
    console.log("hello");
}

document.getElementById("yellow").onclick = function() {
    changeColor('yellow');
}
