// import Content from "./content";
// import Footer from "./footer";
// import Content from "./content";
// import Header from "./header";
import Carddetalies from "./components/card";
import NavBar from "./components/navbar";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.png";
import img4 from "./images/img4.jpeg";

import multiAsyncPromise from "./js/multiAsyncPromise";
const data = [
  { title: "title1", description: "description1", img: img1 },
  { title: "title2", description: "description2", img: img2 },
  { title: "title3", description: "description3", img: img3 },
  { title: "title4", description: "description4", img: img4 },
];
const App = () => {
  const printPromise = () => {
    let myPromise = new Promise((success, error) => {
      const x = 0;
      if (x === 0) {
        success("This is success");
      } else {
        error("This is fail");
      }
    });
    myPromise.then(
      (resolve) => console.log(resolve),
      (rejected) => console.log(rejected)
    );
  };

  const printmultiAsyncPromise = () => {
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

  const printAsyncAwaitPromise = () => {
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
  };
  return (
    <div>
      <NavBar />
      {data.map((item, index) => {
        return (
          <Carddetalies
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            // clickMe={printPromise}
            // clickMe={printmultiAsyncPromise}
            // clickMe={printmultisyncPromise}
            clickMe={printAsyncAwaitPromise}
          >
            <h1>hello</h1>
          </Carddetalies>
        );
      })}
    </div>
  );
};
export default App;
