const initState = {
  recipes: []
};

export const recipeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "GET_RECIPES":
      return { ...state, recipes: payload };
    default:
      return state;
  }
};

export const recipeDetailsReducer=(state={},{type,payload})=>{
  switch(type){
    case "REQUEST_DETAILS":
      return {loading:true}
    case "SET_DETAILS":
      return {...state,payload,loading:false}
    default:
      return state
  }
}
