import { Navbar, Container, FormControl, Form, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src=""
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <span>EAGLEYE RECIPE APP</span>
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Recipe By Ingredient"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
