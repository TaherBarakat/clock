function getTime() {
  let date = new Date();
  let sec = date.getSeconds() * 6;
  let min = date.getMinutes() * 6;
  let hour = date.getHours() * 30;

  document.querySelector(".sec").style.transform = `rotate(${sec + 90}deg)`;
  document.querySelector(".min").style.transform = `rotate( ${min + 90}deg) `;
  document.querySelector(".hour").style.transform = `rotate(${hour + 90}deg)`;

  console.log(date.getSeconds(), date.getMinutes(), date.getHours());
}

setInterval(function () {
  getTime();
}, 1000);
