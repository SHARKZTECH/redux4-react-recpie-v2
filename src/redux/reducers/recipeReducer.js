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
