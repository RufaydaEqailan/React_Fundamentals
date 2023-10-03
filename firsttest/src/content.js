import { Button, Image } from "react-bootstrap";
import React from "react";
import img1 from "./images/img1.jpg";

const Content = () => {
  return (
    <div className="style1">
      This is content
      <Button variant="primary" className="btn btn-danger">
        click me
      </Button>{" "}
      <Image src={img1} rounded />
    </div>
  );
};

export default Content;
