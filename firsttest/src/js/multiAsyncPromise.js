const multiAsyncPromise = () => {
  let eat = true;
  let play = true;
  let sleep = true;

  let eating = new Promise((success, error) => {
    if (eat) {
      success("I am eating ...");
    } else {
      error("Not eating ...");
    }
  }).then(
    (resolve) => console.log(resolve),
    (rejected) => console.log(rejected)
  );

  let playing = new Promise((success, error) => {
    if (play) {
      success("I am plaing ...");
    } else {
      error("Not plaing ...");
    }
  }).then(
    (resolve) => console.log(resolve),
    (rejected) => console.log(rejected)
  );

  let sleeping = new Promise((success, error) => {
    if (sleep) {
      success("I am sleeping ...");
    } else {
      error("Not sleeing ...");
    }
  }).then(
    (resolve) => console.log(resolve),
    (rejected) => console.log(rejected)
  );
};
