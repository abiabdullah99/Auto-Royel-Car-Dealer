import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateDetails.css";
const UpdateDetails = () => {
  const { productId } = useParams();
  const [newData, setNewData] = useState(false);
  const [stockNumber, setStockNumber] = useState({
    stock: "",
  });
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const url = `https://vast-ravine-95722.herokuapp.com/inventory/${productId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [productId, newData]);

  // update quantity

  const handleDelivered = async (id, quantity) => {
    const getQuantity = parseInt(quantity) - 1;
    const newQuantity = {
      quantity: getQuantity.toString(),
    };
    const url = `https://vast-ravine-95722.herokuapp.com/inventory/${id}`;
    await axios.put(url, newQuantity).then((response) => {
      const { data } = response;
      if (data) {
        setNewData(!newData);
      }
    });
    console.log(newQuantity);
  };

  let name, value;
  const getUserData = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setStockNumber({ ...stockNumber, [name]: value });
  };

  const handleUpdate = async (id, quantity) => {
    const { stock } = stockNumber;
    console.log(stock);
    const getQuantity = parseInt(quantity) + parseInt(stock);

    const newQuantity = {
      quantity: getQuantity.toString(),
    };
    console.log(newQuantity);

    // send data to the monogod server and update
    const url = `https://vast-ravine-95722.herokuapp.com/inventory/${id}`;
    await axios.put(url, newQuantity).then((response) => {
      const { data } = response;
      if (data) {
        setNewData(!newData);
      }
    });
  };
  return (
    <div className="productsDetails">
      <div className="productDetail-container">
        <div className="productDetails-img">
          <img src={productDetails.img} alt="" />
        </div>
        <div className="productDetail-info font-mono mt-10 ml-10">
          <h1 className="text-2xl pb-1">Product Id: {productDetails._id}</h1>
          <h1 className="text-2xl pb-1">Product Name: {productDetails.name}</h1>
          <h1 className="text-2xl pb-1">
            Product Price: {productDetails.price}
          </h1>
          <h1 className="text-2xl pb-1">
            Product Stock: {productDetails.quantity}
          </h1>
          <h1 className="text-2xl pb-1">
            Product Supplier: {productDetails.supplier}
          </h1>
          <h3 className="text-xl mb-8">{productDetails.description}</h3>
        </div>
        <button
          onClick={() =>
            handleDelivered(productDetails._id, productDetails.quantity)
          }
          className="deliver-btn"
        >
          Delivered
        </button>
      </div>
      <div className="stock-items">
        <input
          type="text"
          name="name"
          value={productDetails.name}
          disabled
          required
        />
        <input
          type="text"
          name="stock"
          onChange={getUserData}
          placeholder="Add Stock"
          required
        />
        <button
          onClick={() =>
            handleUpdate(productDetails._id, productDetails.quantity)
          }
          className="stock-btn text-mono"
        >
          Add Stock
        </button>
      </div>
    </div>
  );
};

export default UpdateDetails;
