import "./styles.css";

// You're gonna need this
const timeRemaining = document.querySelector("h3");

function getTime() {
  // Don't delete this.
  const nowTime = new Date();
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const timeResult = xmasDay - nowTime;
  const days = parseInt(timeResult / 86400000, 10);
  const hours = parseInt((timeResult % 86400000) / 3600000, 10);
  const minutes = parseInt(((timeResult % 86400000) % 3600000) / 60000, 10);
  const seconds = parseInt(
    (((timeResult % 86400000) % 3600000) % 60000) / 1000,
    10
  );

  timeRemaining.innerText = `${days}d ${
    hours < 10 ? `0${hours}` : `${hours}`
  }h ${minutes < 10 ? `0${minutes}` : `${minutes}`}m ${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
