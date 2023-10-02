let eat = true;
let play = false;
let sleep = true;

let eating = new Promise((success, error) => {
  if (eat) {
    success("I am eating ...");
  } else {
    error("Not eating ...");
  }
});

let playing = new Promise((success, error) => {
  if (play) {
    success("I am playing ...");
  } else {
    error("Not playing ...");
  }
});

let sleeping = new Promise((success, error) => {
  if (sleep) {
    success("I am sleeping ...");
  } else {
    error("Not sleeing ...");
  }
});

let run = async () => {
  await eating();
  await playing();
  await sleeping();
};
