const mySiema = new Siema({
  duration: 500,
  loop: true,
  perPage: {
    768: 2,
    992: 3
  }
});

// listen for keydown event
setInterval(() => mySiema.next(), 4000);

// listen for keydown event
document.addEventListener("keydown", e => {
  // if it's left arrow key
  if (e.keyCode === 37) {
    mySiema.prev();
  }
  // if it's right arrow key
  else if (e.keyCode === 39) {
    mySiema.next();
  }
});
