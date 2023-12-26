// MainRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Watches from "./Watches";

import ReqAuth from "../Components/ReqAuth"; // Import the ReqAuth HOC
import SingleWatch from "./SingleWatch";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Watches />} />
      <Route path="/login" element={<Login />} />
      

      <Route path="/watches/:id" element={<SingleWatch/>}></Route>
    
    
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
