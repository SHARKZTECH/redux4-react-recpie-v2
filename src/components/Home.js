import RecipeComp from "./RecipeComp";
import { Row } from "react-bootstrap";
export default function Home() {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <RecipeComp key={idx} id={idx} />
      ))}
    </Row>
  );
}
