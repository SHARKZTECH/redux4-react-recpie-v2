import { Navbar, Container, FormControl, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const getRecipes = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    const data = await res.json();
    dispatch({
      type: "GET_RECIPES",
      payload: data.meals
    });
  };
  useEffect(() => {
    getRecipes();
  }, [search]);

  return (
    <Navbar bg="dark" variant="dark" className="mb-4" sticky="top">
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
        <Form className="d-flex" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Search Recipe By Ingredient"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
