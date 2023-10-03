import React from "react";
import CardDetails from "./component/card";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.png";
import img4 from "./images/img4.jpeg";

// const title1 = "this is title 1";
// const title2 = "this is title 2";
// const title3 = "this is title 3";
// const title4 = "this is title 4";
// const Content = () => {
//   return (
//     <div>
//       <CardDetails title={title1} />
//       <CardDetails title={title2} />
//       <CardDetails title={title3} />
//       <CardDetails title={title4} />
//     </div>
//   );
// };
const data = [
  { title: "title1", description: "desc1", img: img1 },
  { title: "title2", description: "desc2", img: img2 },
  { title: "title3", description: "desc3", img: img3 },
  { title: "title4", description: "desc4", img: img4 },
];
const printTitle = (message) => console.log("this message from " + message);
const Content = () => {
  return data.map((item, index) => {
    return (
      <CardDetails
        title={item.title}
        description={item.description}
        img={item.img}
        key={index}
        clickMe={printTitle}
      />
    );
  });
};

export default Content;
