const timeContainer = document.querySelector("#time");
const chatTime = document.querySelector(".message__time");
const chatsTime = document.querySelector(".user-component__time");
const chatDate = document.querySelector(".chat__timestamp");

function calender() {
  const currentDate = new Date();
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = currentDate.getDay();
  const dayNow = dayArray[day - 1];
  const month = currentDate.getMonth();
  const monthNow = monthArray[month - 1];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const chatHours = currentDate.getHours();
  const chatMinutes = currentDate.getMinutes();
  if (chatsTime) {
    chatsTime.innerHTML = `${chatHours}:${
      chatMinutes < 10 ? `0${chatMinutes}` : chatMinutes
    }`;
  } else {
  }
  if (chatTime) {
    chatTime.innerHTML = `${chatHours}:${
      chatMinutes < 10 ? `0${chatMinutes}` : chatMinutes
    }`;
  } else {
  }
  if (chatDate) {
    chatDate.innerHTML = `${dayNow}, ${monthNow} ${date}, ${year}`;
  } else {
  }
}

function getTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  timeContainer.innerHTML = `${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  calender();
  setInterval(getTime, 1000);
}
init();
