import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const data = useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();

    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id}>
            <VideoCard key={item.id} info={item}></VideoCard>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
