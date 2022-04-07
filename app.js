let timeLeft = document.querySelectorAll('.time-left h2');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempDay = tempDate.getDay();
let tempMonth = tempDate.getMonth();

let futureDate = new Date(tempYear, tempMonth, tempDay + 14, 11, 30, 0);

function getCurrentTime() {
  let currentTime = new Date();
  let time = futureDate - currentTime;
  const currentDay = 24 * 60 * 60 * 1000;
  const currentHour = 60 * 60 * 1000;
  const currentMinutes = 60 * 1000;
  const day = Math.floor(time / currentDay);

  // 1s = 1000
  // 1m = 60s
  // 1hr = 60m
  // 1day = 24hrs

  let oneday = Math.floor((time % currentDay) / currentHour);
  let hour = Math.floor((time % currentHour) / currentMinutes);
  let minutes = Math.floor((time % currentMinutes) / 1000);

  let values = [day, oneday, hour, minutes];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else return item;
  }
  timeLeft.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
}

let refreshTime = setInterval(getCurrentTime, 1000);

getCurrentTime();
