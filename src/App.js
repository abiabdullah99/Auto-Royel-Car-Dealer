import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Header/About/About";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SingUp from "./components/Login/SignUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import UpdateDetails from "./components/UpdateDetails/UpdateDetails";
import AddItems from "./components/AddItems/AddItems";
import MangeInventory from "./components/ManageInventory/MangeInventory";
import MyItems from "./components/MyItems/MyItems";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blogs></Blogs>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/updatedetails/:productId"
          element={
            <PrivateRoute>
              <UpdateDetails></UpdateDetails>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SingUp></SingUp>}></Route>
        <Route
          path="/myItems"
          element={
            <PrivateRoute>
              <MyItems></MyItems>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manageItems"
          element={
            <PrivateRoute>
              <MangeInventory></MangeInventory>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <PrivateRoute>
              <AddItems></AddItems>
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
