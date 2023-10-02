const printmultisyncPromise = () => {
  let eat = true;
  let play = false;
  let sleep = true;

  let eating = new Promise((success, error) => {
    if (eat) {
      success("I am eating ...");
    } else {
      error("Not eating ...");
    }
  }).then(
    (resolve) => {
      console.log(resolve);
      let playing = new Promise((success, error) => {
        if (play) {
          success("I am playing ...");
        } else {
          error("Not playing ...");
        }
      }).then(
        (resolve) => {
          console.log(resolve);
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
        },
        (rejected) => console.log(rejected)
      );
    },
    (rejected) => console.log(rejected)
  );
};
