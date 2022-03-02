import RecipeComp from "./RecipeComp";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const { recipes } = useSelector((state) => state.recipes);

  const getRecipes = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=eggs`
    );
    const data = await res.json();
    dispatch({
      type: "GET_RECIPES",
      payload: data.meals
    });
  };
  useEffect(() => {
    getRecipes();
  }, []);

  console.log(recipes);
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {recipes?.map((meal) => (
        <RecipeComp key={meal.idMeal} id={meal.idMeal} />
      ))}
    </Row>
  );
}
