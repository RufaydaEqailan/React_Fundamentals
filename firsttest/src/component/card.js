import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// const CardDetails = (props) => {
const CardDetails = ({ title, img, description, clickMe, children }) => {
  //   const handelClick = () => console.log(props.title);
  const handelClick = () => clickMe(title);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {children}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handelClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
