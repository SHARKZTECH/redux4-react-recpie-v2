import RecipeComp from "./RecipeComp";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Home() {
  const { recipes } = useSelector((state) => state.recipes);
  console.log(recipes);

   return (
     <>
     {recipes ? (
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {recipes?.map((meal) => (
            <RecipeComp key={meal.idMeal}  meal={meal} />
          ))}
        </Row>
     ) : <h3>No Recipe Found!</h3>}
     </>
  
  );
}
