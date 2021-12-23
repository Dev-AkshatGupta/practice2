const input = document.querySelector("#Input-txt");
const inputBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output-div");

function clickHandler() {
     const value = input.value;
    if ( value.length < 10) {
        outputEl.innerText = "Please enter atleast 10 characters";
    } else {
        outputEl.innerText = "its totally perfect";
    }
}
inputBtn.addEventListener("click", clickHandler)