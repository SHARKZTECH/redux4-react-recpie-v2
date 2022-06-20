import { Modal, Button,Image } from "react-bootstrap";
import {useSelector} from "react-redux"

export default function RecipeDetails(props) {  

  const {meal}=useSelector(state=>state.details)
    if(props.show){
      if(meal!==undefined){
       const m=(meal.meals[0])
       console.log(m)
       return(
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {m.strMeal}
          {/* {props.id} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center text-success">{m.strCategory}</h4>
        <h4 className="text-center text-success">INSTRUCTION:</h4>
        <p>
          {m.strInstructions}
        </p>
        <span className="d-flex justify-content-center m-3">
        <Image  
         src={m.strMealThumb} roundedCircle width={100} fluid />
        </span>
        
        <a href={m.strYoutube} className="d-flex justify-content-center">
              <Button >YOUTUBE</Button>
        </a>
      </Modal.Body>
      <Modal.Footer>       
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
       )
      }      
    }

  return (
    <>
    </>
  );
}
