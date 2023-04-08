import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMEnuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          className="h-12 p-2 mr-2"
          alt="menu-icon"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          onClick={() => toggleMEnuHandler()}
        />
        <img
          className="h-12 p-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-12 p-2"
          alt="settings-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nO3ZQQqDMBCF4bdyDuEVG49Zm5W9Smn3FmGEboq6KMWX/4OAqJshQ5JHJAAA0IKQNEi6SXrlWJ5LfrPSS7pLmr+MKf+xEBvFfhZtMdPDjmLXcZGBeqDgUQaeBwpe/m2q4IcM1NZaurS2aEVuOXu2pU4m+o2irQ4eqy5bdsyFbBnXfGczswB8BHlYnttSkIflfbSsrYWHJ3lY5OHZqaULeVjk4cnp4LEiDwM4lSAPizwcMjC0drSs5GFxPzxzP3xipbVFK7gfFvfD3b/bEAAA6Ofe6+ZQCoFQYV8AAAAASUVORK5CYII="
        />
        <img
          className="h-12 p-2"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
