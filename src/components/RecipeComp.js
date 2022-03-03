import { Card, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"


import RecipeDetails from "./RecipeDetails";
// import imge from "../download.jpg";
import { getDetails } from "../redux/actions";

export default function RecipeComp(props) {
  const dispatch=useDispatch()
  const [modalShow, setModalShow] = useState(false);  

  const handleClick=(id)=>{
    setModalShow(true)
    if(!modalShow){
        dispatch(getDetails(id))   
    }  
  }
  return (
    <Col>
      <RecipeDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.meal.idMeal}
      />
      <Card onClick={()=>handleClick(props.meal.idMeal)}>
        <Card.Img variant="top" src={props.meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{props.meal.strMeal}</Card.Title>
          <Card.Text
           className="bg-warning p-3 text-center h4 font-weight-bold rounded ">
             View Recipe
             </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
