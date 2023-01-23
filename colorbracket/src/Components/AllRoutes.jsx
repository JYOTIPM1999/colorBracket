import React from "react";
import { Route, Routes } from "react-router-dom";
import Ingredients from "../Pages/Ingredients";
import Login from "../Pages/Login";
import Preparation from "../Pages/Preparation";
import Recipe from "../Pages/Recipe";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/preparation" element={<Preparation />} />
    </Routes>
  );
};

export default AllRoutes;
