const v1 = document.getElementsByClassName('v1')[0];
const time = {}

// You're gonna need this
function getTime() {
  // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const today = new Date();

    //   total value
  const totalSec = Math.floor((xmasDay - today) / 1000);
  const totalMin = Math.floor(totalSec / 60);
  const totalHour = Math.floor(totalMin / 60);
  const totalDate = Math.floor(totalHour / 24);

  //   actual value
  const sec = totalSec > 60 ? totalSec % 60 : totalSec;
  const min = totalMin > 60 ? totalMin % 60 : totalMin;
  const hour = totalHour > 24 ? totalHour % 24 : totalHour;
  const day = totalDate;

    return `d-day ${day} days ${hour} hrs ${min} mins ${sec} sec`;
}

// set text
function setText() {
    v1.innerText = getTime();
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
