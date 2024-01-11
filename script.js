/*Datescreen-start*/
function updateDate() {
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();

    var months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];
    var week = [
        "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];
    var ids = ["dayname","month","daynum","year"];
    var values = [week[dname], months[mo], dnum.toString().padStart(2, '0'), yr];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = values[i];
    }
}

Number.prototype.padStart = function(digits, char) {
    var n = this.toString();
    return char.repeat(digits - n.length) + n;
};

updateDate();
setInterval(updateDate, 1000); // Update every second





/*Datescreen-End*/


/*Analogclockscreen-start*/
let hr = document.getElementById('hour');
let m = document.getElementById('min');
let s = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    m.style.transform = `rotate(${mRotation}deg)`;
    s.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
/*Analogclockscreen-End*/

/*Digitalclockscreen-start*/

const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm; // Corrected line

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();
/*Digitalclockscreen-End*/