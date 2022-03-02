import { combineReducers } from "redux";

import { recipeReducer, recipeDetailsReducer } from "./recipeReducer";

const reducers = combineReducers({
  recipes: recipeReducer,
  details: recipeDetailsReducer
});

export default reducers;
