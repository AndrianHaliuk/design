let text = document.getElementById("text");
let cloudLeft = document.getElementById("cloudLeft");
let plane  = document.getElementById("plane");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    cloudLeft.style.left = value * -0.5 + "px";
    plane.style.left = value * -2.5 + "px";
    plane.style.bottom = value * 1.8 + "px";
})