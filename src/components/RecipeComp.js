import { Card, Col } from "react-bootstrap";
import { useState } from "react";

import RecipeDetails from "./RecipeDetails";
import imge from "../download.jpg";

export default function RecipeComp() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col>
      <RecipeDetails show={modalShow} onHide={() => setModalShow(false)} />
      <Card onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={imge} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
