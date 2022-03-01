import RecipeComp from "./RecipeComp";
import { Row } from "react-bootstrap";
export default function Home() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <RecipeComp />
      ))}
    </Row>
  );
}
