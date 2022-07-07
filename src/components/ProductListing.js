import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "./../redux/action/ProductsAction";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // const fetchdata = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log(err.message);
  //     });

  //   dispatch(setProducts(response.data));
  // };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
