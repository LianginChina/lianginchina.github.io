let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";
let image = document.querySelector("img");
image.onclick = function () {
    alert("clicked the image!");
    let mySrc = image.getAttribute("src");
    if (mySrc === "images/IELTS-logo.jpeg") {
        image.setAttribute("src", "images/IELTS-logo2.png");
    } else {
        image.setAttribute("src", "images/IELTS-logo.jpeg");
    }
}

function setUsername() {
    let userName = prompt("plz input your name");
    if (userName === null || userName === "") {
        setUsername();
    } else {
        localStorage.setItem("name", userName);
        myHeading.textContent = "Hello World " + userName;
    }

}
if (!localStorage.getItem("name")) {
    setUsername();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello World " + storedName;
}
let myButton = document.querySelector("button");
myButton.onclick = function () {
    setUsername();
}