import React from "react";
import CardDetails from "./component/card";

const title1 = "this is title 1";
const title2 = "this is title 2";
const title3 = "this is title 3";
const title4 = "this is title 4";
const Content = () => {
  return (
    <div>
      <CardDetails title={title1} />
      <CardDetails title={title2} />
      <CardDetails title={title3} />
      <CardDetails title={title4} />
    </div>
  );
};

export default Content;
