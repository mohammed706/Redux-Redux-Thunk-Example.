import { ActionTypes } from "../contant/ActionTypes";
import fakestoreapi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const res = await fakestoreapi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const res = await fakestoreapi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: res.data });
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
  };
};
