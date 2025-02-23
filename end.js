document.getElementById("restart-btn").addEventListener("click", () => {
  window.electronAPI.loadPage("timerStart.html");
});
