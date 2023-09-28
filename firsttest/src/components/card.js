import { Button, Card } from "react-bootstrap";

// const Carddetalies = (props) => {
const Carddetalies = ({ title, description, img, clickMe, children }) => {
  const handelClick = () => {
    // console.log(props.title);
    // props.clickMe(props.title);
    clickMe(title);
  };
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={props.img} />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.description}</Card.Text>
    //     <Button variant="primary" onClick={handelClick}>
    //       Go somewhere
    //     </Button>
    //   </Card.Body>
    // </Card>
    <Card style={{ width: "19rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handelClick}>
          Go somewhere
        </Button>
        {children}
      </Card.Body>
    </Card>
  );
};
export default Carddetalies;
