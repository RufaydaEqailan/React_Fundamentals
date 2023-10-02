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

const data = [
  { title: "title1", description: "description1", img: img1 },
  { title: "title2", description: "description2", img: img2 },
  { title: "title3", description: "description3", img: img3 },
  { title: "title4", description: "description4", img: img4 },
];
const App = () => {
  const printTile = () => {
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
            clickMe={printTile}
          >
            <h1>hello</h1>
          </Carddetalies>
        );
      })}
    </div>
  );
};
export default App;
