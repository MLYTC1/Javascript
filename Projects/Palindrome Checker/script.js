const input = document.getElementById("input")
const body = document.getElementsByTagName("body")[0]
const button = document.getElementById("button")
function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value === reverse) {
        body.style.backgroundColor = 'green';
        // alert("P A L I N D R O M E");
        button.innerText = "P A L I N D R O M E!";
        button.style.color = 'green';
    } else {
        body.style.backgroundColor = 'red';
        // alert("Not Today!");
        button.innerText = "Not Today!";
        button.style.color = 'red';
    }

    input.value = ""
}