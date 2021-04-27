function setDartMode() {
  var root = document.documentElement;
  root.style.setProperty('--main-bg', '#000')
  root.style.setProperty('--main-color', '#fff')
}

function setShallowMode() {
  var root = document.documentElement;
  root.style.setProperty('--main-bg', '#fff')
  root.style.setProperty('--main-color', '#000')
}
