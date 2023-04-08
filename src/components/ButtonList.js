import React from "react";
import Button from "../components/Button";
const ButtonList = () => {
  const buttonsList = [
    "All",
    "Cricket",
    "News",
    "Comedy",
    "Workout",
    "Computer Programming",
    "Baking",
    "Football",
    "Bollywood",
    "Sitcoms",
    "Songs",
    "Live",
  ];

  return (
    <div className="flex">
      {buttonsList.map((item) => {
        return <Button id={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
