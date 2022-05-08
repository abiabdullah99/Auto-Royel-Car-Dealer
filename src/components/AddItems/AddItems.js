import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "./AddItems.css";
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://vast-ravine-95722.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      reset()
  };
  return (
    <div className="text-center font-mono mt-20 mb-10">
      <h2 className="text-4xl font-semibold ">
        Add New P<span>roducts</span>
      </h2>
      <form
        className="flex flex-col w-80 mx-auto mt-20 form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-80 rounded  mb-5 py-2 px-10"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input
          className="w-80 rounded  mb-5 py-2 px-10"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <input
          className="w-80 rounded  mb-5 py-2 px-10"
          value={user.email}
          {...register("email", { required: true })}
        />
        <input
          className="w-80 rounded  mb-5 py-2 px-10"
          placeholder="price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="w-80 rounded mb-5 py-2 px-10"
          placeholder="quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="w-80 rounded  mb-5 py-2 px-10"
          placeholder="supplier"
          {...register("supplier", { required: true })}
        />
        <input
          className="w-80 rounded  mb-5 py-2 px-10"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="product-btn rounded"
          type="Submit"
          value="Post Product"
        />
      </form>
    </div>
  );
};

export default AddItems;
