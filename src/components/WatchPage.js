import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [videoId] = useSearchParams();
  console.log(videoId.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu);
  });
  return (
    <div className="">
      <iframe
        width="800"
        height="500"
        src={"https://www.youtube.com/embed/" + videoId.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
