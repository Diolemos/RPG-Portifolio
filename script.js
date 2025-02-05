
window.onload = function () {
    var htmlProgress = document.getElementById("html-bar");
    if (htmlProgress) {
        RPGUI.set_value(htmlProgress, 0.7);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'html-bar' not found.");
    }
    var reactProgress = document.getElementById("react-bar");
    if (reactProgress) {
        RPGUI.set_value(reactProgress, 0.5);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'react-bar' not found.");
    }

    var javaProgress = document.getElementById("java-bar");
    if (javaProgress) {
        RPGUI.set_value(javaProgress, 0.6);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'java-bar' not found.");
    }
    var jsProgress = document.getElementById("js-bar");
    if (jsProgress) {
        RPGUI.set_value(jsProgress, 0.8);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'js-bar' not found.");
    }

};