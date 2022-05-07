import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyitemsShow from "./MyitemsShow";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([""]);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/myItems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);
  console.log(myItems);
  return (
    <section>
      <h1 className="text-white text-center pt-10 text-5xl font-mono font-semibold"> My P<span>roducts</span>: {myItems.length}</h1>
      <div className="product-container">
        {myItems.map((items) => (
          <MyitemsShow key={items._id} items={items}></MyitemsShow>
        ))}
      </div>
    </section>
  );
};

export default MyItems;
