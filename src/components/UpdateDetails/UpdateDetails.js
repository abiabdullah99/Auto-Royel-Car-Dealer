import React from "react";
import { useParams } from "react-router-dom";
import UseProductDetails from "../../Hook/UseProductDetails";
import "./UpdateDetails.css";
const UpdateDetails = () => {
  const { productId } = useParams();
  const [productDetails] = UseProductDetails(productId);

  const { name, img, _id, description, price, quantity, supplier } =
    productDetails;
  return (
    <div className="productsDetails">
      <div className="productDetail-container">
        <div className="productDetails-img">
          <img src={img} alt="" />
        </div>
        <div className="productDetail-info font-mono mt-10 ml-10">
          <h1 className="text-2xl pb-1">Product Id: {_id}</h1>
          <h1 className="text-2xl pb-1">Product Name: {name}</h1>
          <h1 className="text-2xl pb-1">Product Price: {price}</h1>
          <h1 className="text-2xl pb-1">Product Stok: {quantity}</h1>
          <h1 className="text-2xl pb-1">Product Supplier: {supplier}</h1>
          <h3 className="text-xl mb-8">{description}</h3>
        </div>
        <button className="deliver-btn">Delivered</button>
      </div>
    </div>
  );
};

export default UpdateDetails;
