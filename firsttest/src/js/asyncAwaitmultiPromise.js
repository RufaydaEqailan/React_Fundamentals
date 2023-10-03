let eat = true;
let play = false;
let sleep = true;

let EATING = () => {
  return new Promise((success, error) => {
    if (eat) {
      success("I am eating ...");
    } else {
      error("Not eating ...");
    }
  });
};
let PLAYING = () => {
  return new Promise((success, error) => {
    if (play) {
      success("I am playing ...");
    } else {
      error("Not playing ...");
    }
  });
};

let SLEEPING = () => {
  return new Promise((success, error) => {
    if (sleep) {
      success("I am sleeping ...");
    } else {
      error("Not sleeing ...");
    }
  });
};

let run = async () => {
  try {
    const eatmessage = await EATING();
    console.log(eatmessage);
    const playmessage = await PLAYING();
    console.log(playmessage);
    const sleppmessage = await SLEEPING();
    console.log(sleppmessage);
  } catch (error) {
    console.log(error);
  }
};
run();
