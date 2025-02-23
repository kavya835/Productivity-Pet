document.getElementById("start-btn").addEventListener("click", () => {
  localStorage.clear();
  window.electronAPI.loadPage("timerStart.html");
});

