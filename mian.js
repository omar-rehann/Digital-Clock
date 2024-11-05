let hours = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let nightlight = document.getElementById("ampm");

function update() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let newtext = "AM";
    if (h > 12) {
        h = h - 12;
        newtext = "Pm";
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hours.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    nightlight.innerText = newtext;
}
setInterval(() => {
    update();
}, 1000);
update();