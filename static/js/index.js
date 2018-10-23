const mySiema = new Siema({
  duration: 500,
  loop: true,
});

// listen for keydown event
setInterval(() => mySiema.next(), 4000);
