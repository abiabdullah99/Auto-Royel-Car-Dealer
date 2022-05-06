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
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blogs></Blogs>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SingUp></SingUp>}></Route>
        <Route path="/product" element={<Products></Products>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
