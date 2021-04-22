// Text
const body = document.getElementsByTagName("body")[0];
const h2 = document.createElement("h2");
body.appendChild(h2);
h2.innerText = "Hello!";
h2.style.color = "white";

// Change background upon changing screen size
function resizeEventHandler() {
    if (window.innerWidth < 500) {
        body.style.background = "#173F5F";
    } else if (window.innerWidth < 700) {
        body.style.background = "#F6D55C";
    } else {
        body.style.background = "#ED553B";
    }
}
resizeEventHandler();
window.addEventListener('resize', resizeEventHandler);



