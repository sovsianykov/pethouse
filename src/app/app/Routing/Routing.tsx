import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../ApprRoutes/AppRoutes";
import Home from "../../Pages/Home/Home";


const Routing = () => {
  return (
    <Routes>
       <Route index element={<Home/>}/>
       <Route path={AppRoutes.Home} element={<Home/>}/>
    </Routes>
  );
};

export default Routing;
