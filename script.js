var counter = 0;

function changeText() {
    counter++;
    document.getElementById("dynamic-text").innerText = `You clicked the button ${counter} times!`;
}
