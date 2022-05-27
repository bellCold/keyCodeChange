const put = document.getElementById("put");
const out = document.getElementById("out");

function change() {
    let firstText = document.getElementById("put");
    let changeText = document.getElementById("out");
    if (firstText.value == "") {
        changeText.value = firstText.value;
    } else {
        changeText.value = firstText.value.charCodeAt();
    }
}
put.addEventListener("keyup", change);