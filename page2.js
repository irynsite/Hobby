function openFullscreen(id) {
  const elem = document.getElementById(id);
  if (!elem) {
    console.error("Element not found:", id);
    return;
  }

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}