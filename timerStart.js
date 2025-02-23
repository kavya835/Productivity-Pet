document.getElementById("break-btn").addEventListener("click", () => {
  window.electronAPI.loadPage("break.html");
});

document.getElementById("end-btn").addEventListener("click", () => {
  window.electronAPI.loadPage("end.html");
});
