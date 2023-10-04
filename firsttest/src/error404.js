import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div>
      <h1>Page Not Found 404 Error</h1>
      <Link to="/">
        {" "}
        <Button>Go home</Button>
      </Link>
    </div>
  );
};

export default Error404;
