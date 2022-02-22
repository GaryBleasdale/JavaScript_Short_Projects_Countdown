const now = new Date();
const giveawayTime = new Date(2023, 01, 04, 11, 30);


const timeRemaining = giveawayTime - now;






let secondHTML = document.body.querySelector('.secs')


if (now<giveawayTime){
setInterval(seconds, 1000)
setInterval(minutes, 1000)
setInterval(hours, 1000)
setInterval(days, 1000)

function seconds() {
  const now = new Date();
  const giveawayTime = new Date(2022, 02, 04, 11, 30);
  const timeRemaining = giveawayTime - now;
  const secs = Math.floor(timeRemaining / 1000 % 60)
  let secondHTML = document.body.querySelector('.secs')
  secondHTML.innerHTML = `
    <p id="number">${secs}</p>
    <p>SECS</>
  `
}

function minutes() {
  const now = new Date();
  const giveawayTime = new Date(2023, 01, 04, 11, 30);
  const timeRemaining = giveawayTime - now;
  const mins = Math.floor(timeRemaining / 60 / 1000 % 60)
  let minuteHTML = document.body.querySelector('.mins')
  minuteHTML.innerHTML = `
      <p id="number">${mins}</p>
      <p>MINS</>
    `
}


function hours() {
  const now = new Date();
  const giveawayTime = new Date(2023, 01, 04, 11, 30);
  const timeRemaining = giveawayTime - now;
  const hours = Math.floor(timeRemaining / 60 / 60 / 1000 % 24)
  let hoursHTML = document.body.querySelector('.hours')
  hoursHTML.innerHTML = `
        <p id="number">${hours}</p>
        <p>HOURS</>
      `
}


function days() {
  const now = new Date();
  const giveawayTime = new Date(2023, 01, 04, 11, 30);
  const timeRemaining = giveawayTime - now;
  const days = Math.floor(timeRemaining / 24 / 60 / 60 / 1000)
  let daysHTML = document.body.querySelector('.days')
  daysHTML.innerHTML = `
          <p id="number">${days}</p>
          <p>DAYS</>
        `
}



} else {
  let countdownTimer = document.body.querySelector('.countdown-timer');
  let p = document.body.getElementsByTagName('p')
  let header = document.body.querySelector('.header')
  header.innerHTML = "Giveaway Ended On Friday, 4 March 2023 11:30am"
  countdownTimer.style.display='none';
  p[0].style.display = 'none'

}



