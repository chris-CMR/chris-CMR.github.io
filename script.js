var counter = 0;

function changeText() {
    counter++;
    document.getElementById("dynamic-text").innerText = `you clicked the button ${counter} times!`;
}
