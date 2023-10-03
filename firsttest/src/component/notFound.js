import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const NotFound = (props) => {
  return (
    <div>
      <Alert variant={props.color}>
        {props.msg}
        <Button variant="danger">CLOSE</Button>
      </Alert>
    </div>
  );
};

export default NotFound;
