import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Header/About/About";
import Product from "./components/Product/Product";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SingUp from "./components/Login/SignUp/SingUp";
import PrivateRoute from "./PrivateRoute";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product></Product>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
};

export default App;
