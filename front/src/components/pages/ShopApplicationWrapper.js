import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ShopApplicationWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Spinner />
    </div>
  );
};

export default ShopApplicationWrapper;
