import React from "react";
import { SideBar } from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid-container grid-cols-12 flex">
      <SideBar className=" felx col-span-3" />
      <Outlet className=" felx col-span-9" />
    </div>
  );
};

export default Body;
