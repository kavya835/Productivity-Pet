document.getElementById("break-btn").addEventListener("click", () => {
  timerStop();
  window.electronAPI.loadPage("break.html");

});

document.getElementById("end-btn").addEventListener("click", () => {
  localStorage.clear();
  window.electronAPI.loadPage("end.html");
});

const display = document.getElementById("timer");


let startTime = 0;
let elapsed = 0;
let timerDisplay = null;




function timerBegin(previous) {
  if(previous) {
    elapsed = previous;
    format(elapsed);
  }

  startTime = Date.now() - elapsed;
  timerDisplay = setInterval(update, 1000);
}

function update() {
  const currentTime = Date.now();
  elapsed = currentTime - startTime;

  format(elapsed);
}

function format (milliseconds) {

  let hours = Math.floor(milliseconds / (1000 * 60 *60));
  let minutes = Math.floor(milliseconds / (1000 * 60) % 60);
  let seconds = Math.floor(milliseconds / 1000 % 60);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function timerStop() {
  clearInterval(timerDisplay);
  elapsedTime = Date.now() - startTime;
  localStorage.setItem("previous-time", elapsedTime);
}

window.onload = function () {
  const previousElapsed = localStorage.getItem("previous-time");
  let previous = null;

  if (previousElapsed !== null && !isNaN(parseInt(previousElapsed))) {
    previous = parseInt(previousElapsed);
  }

  timerBegin(previous);
};
