import { Button, Badge } from "react-bootstrap";

const Content = () => {
  return (
    <div>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>{" "}
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
    </div>
  );
};

export default Content;
