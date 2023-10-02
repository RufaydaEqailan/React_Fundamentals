let myPromise = new Promise((success, error) => {
  const x = 0;
  if (x === 0) {
    success("This is ok");
  } else {
    error("This is fail");
  }
});
myPromise.then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);
