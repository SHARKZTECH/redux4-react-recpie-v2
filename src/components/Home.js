import RecipeComp from "./RecipeComp";
import { Row } from "react-bootstrap";
import { useEffect } from "react";

export default function Home() {
  const getRecipes = async () => {
    const res = await fetch(
      "www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <RecipeComp key={idx} id={idx} />
      ))}
    </Row>
  );
}
