import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  // Handle Delet Items

  const handleDeletProductItem = (id) => {
    const proced = window.confirm("Are Your Sure Delete Items");
    if (proced) {
      const url = `https://vast-ravine-95722.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reamingData = myItems.filter((product) => product._id !== id);
          setMyItems(reamingData);
        });
    }
  };

  useEffect(() => {
    const email = user.email;
    const url = `https://vast-ravine-95722.herokuapp.com/myItems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);
  console.log(myItems);

  return (
    <section>
      <h1 className="text-white text-center pt-10 text-5xl font-mono font-semibold">
        {" "}
        My Pro<span>ducts</span>: {myItems.length}
      </h1>
      <div className="product-container">
        {myItems.map((item) => (
          <div className="product-info relative mt-20" key={item._id}>
            <div className="items-img">
              <img src={item.img} alt="" />
            </div>
            <div className="item-details font-mono mt-5">
              <h1 className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Name:</span> {item.name}
              </h1>
              <h2 className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Price:</span> {item.price}
              </h2>
              <h3 className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Quantity:</span> {item.quantity}
              </h3>
              <p className="text-white pb-2 px-5 text-lg">
                <span className="text-xl">Supplier:</span> {item.supplier}
              </p>
              <p className="text-white pb-2 text-sm text-justify px-5 mb-20">
                <span>{item.description}</span>
              </p>
            </div>
            <button
              onClick={() => handleDeletProductItem(item._id)}
              className="absolute bottom-0 update-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyItems;
