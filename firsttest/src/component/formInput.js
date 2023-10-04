import Form from "react-bootstrap/Form";

const onChangeHandler = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};
const FormInput = () => {
  return (
    <Form onSubmit={onChangeHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <button type="submit">clcik</button>
      </Form.Group>
    </Form>
  );
};

export default FormInput;
