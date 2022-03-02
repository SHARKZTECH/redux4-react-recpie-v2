export const getDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_DETAILS" });
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    dispatch({
      type: "SET_DETAILS",
      payload: data
    });
  };
};
