import { API } from "./fetchApi";

const setLoaded = (val) => ({
  type: "SET_LOADED",
  payload: val,
});

export const fetchPizzas = (catygory,sortBy,order) => (dispatch) => {
  dispatch(setLoaded(false));

  API(catygory,sortBy,order).then((data) => dispatch(setPizzas(data)));
};

export const setPizzas = (value) => {
  return {
    type: "SET_PIZZAS",
    payload: value,
  };
};
