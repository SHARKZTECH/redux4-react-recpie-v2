import { Card, Col } from "react-bootstrap";
import { useState } from "react";

import RecipeDetails from "./RecipeDetails";
// import imge from "../download.jpg";

export default function RecipeComp(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col>
      <RecipeDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.id}
      />
      <Card onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={props.meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{props.meal.strMeal}</Card.Title>
          <Card.Text>View The Recipe</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
