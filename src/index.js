"use strict";
const hoursEL = document.querySelector("#hours");
const minutesEL = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");

const meridiemEL = document.querySelector("#meridiem");

setInterval(function () {
  const now = new Date();

  //   console.log(now);
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const part = new Intl.DateTimeFormat(navigator.language, options)
    .format(now)
    .split(":");

  //   console.log(part);
  const extractsecAndMeridiem = part[2].split(" ");
  console.log(extractsecAndMeridiem);
  const hours = parseInt(part[0], 10);
  const minutes = parseInt(part[1], 10);
  const seconds = parseInt(extractsecAndMeridiem[0], 10);
  //   console.log(hours, seconds, minutes);

  hoursEL.textContent = hours.toString().padStart(2, 0);
  minutesEL.textContent = minutes.toString().padStart(2, 0);
  secondsEL.textContent = seconds.toString().padStart(2, 0);
  meridiemEL.textContent = extractsecAndMeridiem[1];
}, 1000);
