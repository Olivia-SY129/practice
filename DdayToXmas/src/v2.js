const v2 = document.getElementsByClassName('v2')[0];
console.log()
const time2 = {}

// You're gonna need this
function getTime2() {
  // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const today = new Date();

    //   total raw value
    const totalSec = (xmasDay - today) / 1000;
    const totalMin = totalSec / 60;
    const totalHour = totalMin / 60;
    const totalDay = totalHour / 24;

    const time2 = {
        s: totalSec, 
        m: totalMin, 
        h: totalHour, 
        d: totalDay,
    };
    
    //   total rounded value
    const keys = Object.keys(time2);
    const rounded = Object.values(time2).map((v) => Math.floor(v));

    for(i = 0; i < rounded.length; i++) {
        time2[keys[i]] = rounded[i];
    }

    const {s, m, h, d} = time2;

    //   actual value
    const sec = s > 60 ? s % 60 : s;
    const min = m > 60 ? m % 60 : m;
    const hour = h > 24 ? h % 24 : h;
    const day = d;  

    return `d-day ${day} days ${hour} hrs ${min} mins ${sec} sec`;
}

// set text
function setText() {
    v2.innerText = getTime2();
}

// update window
function update() {
  setInterval(setText, 1000);
}

function init() {
  setText();
  update();
}
init();
