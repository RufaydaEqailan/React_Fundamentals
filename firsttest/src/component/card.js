import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardDetails = (props) => {
  //   const handelClick = () => console.log(props.title);
  const handelClick = () => props.clickMe(props.title);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={handelClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
