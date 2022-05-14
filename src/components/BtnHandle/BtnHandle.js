import React from "react";
import { useParams } from "react-router-dom";
import UseProductDetails from "../../Hook/UseProductDetails";

const BtnHandle = () => {
  const { productId } = useParams();
  const [productDetails] = UseProductDetails(productId);
  const addQuantity = (event) => {
    // eventhandler
    event.preventDefault();
    const stock = event.target.quantity.value;
    const quentity = parseInt(productDetails.quantity) + parseInt(stock);
    console.log(quentity);
    console.log(productDetails.quantity);
    fetch(`https://vast-ravine-95722.herokuapp.com/inventory/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quentity }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("updateCar added successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <div className="stock-items">
        <form onSubmit={addQuantity}>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            disabled
            required
          />
          <input type="text" name="quantity" placeholder="Add Stock" required />
          <button className="stock-btn text-mono">Add Stock</button>
        </form>
      </div>
    </div>
  );
};

export default BtnHandle;
