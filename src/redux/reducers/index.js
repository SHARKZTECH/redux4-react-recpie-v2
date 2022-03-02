import { combineReducers } from "redux";

import { recipeReducer } from "./recipeReducer";

const reducers = combineReducers({
  recipes: recipeReducer
});

export default reducers;
