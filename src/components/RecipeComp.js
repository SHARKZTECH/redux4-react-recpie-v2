import { Card, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import RecipeDetails from "./RecipeDetails";
// import imge from "../download.jpg";
import { getDetails } from "../redux/actions";

export default function RecipeComp(props) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getDetails(props.id));
  }, [props.id, dispatch]);

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
