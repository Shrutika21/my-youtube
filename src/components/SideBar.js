import React from "react";
import shortsIcon from "../youtube-shorts-logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (isMenuOpen) {
    return (
      <div className="divide-y divide-gray-200 hover:divide-y-8 p-5 mr-5 shadow-lg  col-span-2">
        <div>
          <Link to="/">
            <div className="p-1 grid grid-flow-col rounded-lg">
              <div className="flex col-span-2">
                <img
                  className="h-12 w-12 mr-2 p-2"
                  alt="home"
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                />
                <div className="h-3 font-normal p-3 flex col-span-10">Home</div>
              </div>
            </div>
          </Link>

          <div className="p-1 grid grid-flow-col rounded-lg ">
            <p className="flex col-span-2">
              <img className="h-12 w-12  p-2" alt="shorts" src={shortsIcon} />
              <div className="h-3 font-normal p-3 flex col-span-10">Shorts</div>
            </p>
          </div>

          <div className="p-1 grid grid-flow-col rounded-lg">
            <p className="flex col-span-2">
              <img
                className="h-12 w-10 mr-0 p-2"
                alt="subscriptions"
                src="https://cdn-icons-png.flaticon.com/512/8191/8191644.png"
              />
              <div className="h-3 font-normal p-3 flex col-span-10">
                Subscriptions
              </div>
            </p>
          </div>
        </div>
        <div>
          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2 ">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Video Library"
                src="https://cdn-icons-png.flaticon.com/512/6020/6020269.png"
              />
              <div className="h-3 font-normal flex col-span-10 p-3">
                Library
              </div>
            </p>
          </div>

          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2 ">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="History"
                src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"
              />
              <div className="h-3 font-normal flex col-span-10 p-3">
                History
              </div>
            </p>
          </div>

          <div className="p-1 grid grid-flow-col mb-2">
            <p className="flex col-span-2">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Liked Videoes"
                src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
              />
              <div className="h-3 font-normal p-3 mb-4 pb-4">Liked Videoes</div>
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold pt-5">Explore</h1>
          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2 ">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Trending"
                src="https://cdn-icons-png.flaticon.com/512/2595/2595122.png"
              />
              <div className="h-3 font-normal p-3">Trending</div>
            </p>
          </div>
          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2 ">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Shopping"
                src="https://cdn-icons-png.flaticon.com/512/4402/4402401.png"
              />
              <div className="h-3 font-normal p-3">Shopping</div>
            </p>
          </div>

          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2 ">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Music"
                src="https://cdn-icons-png.flaticon.com/512/898/898894.png"
              />
              <div className="h-3 font-normal p-3">Music</div>
            </p>
          </div>

          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2 ">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Movies"
                src="https://cdn-icons-png.flaticon.com/512/4241/4241295.png"
              />
              <div className="h-3 font-normal p-3">Movies</div>
            </p>
          </div>
          <div className="p-1 grid grid-flow-col">
            <p className="flex col-span-2">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="Live"
                src="https://cdn-icons-png.flaticon.com/512/3669/3669451.png"
              />
              <div className="h-3 font-normal p-3">Live</div>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-2 min-w-fit">
        <Link to="/">
          <div className="p-1 grid grid-flow-col rounded-lg">
            <p className="flex col-span-2">
              <img
                className="h-12 w-12 mr-2 p-2"
                alt="home"
                src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              />
            </p>
          </div>
        </Link>

        <div className="p-1 grid grid-flow-col rounded-lg">
          <p className="flex col-span-2">
            <img className="h-12 w-12 mr-2 p-2" alt="shorts" src={shortsIcon} />
          </p>
        </div>

        <div className="p-1 grid grid-flow-col rounded-lg">
          <p className="flex col-span-2">
            <img
              className="h-12 w-12 mr-2 p-2"
              alt="subscriptions"
              src="https://cdn-icons-png.flaticon.com/512/2989/2989849.png"
            />
          </p>
        </div>

        <div className="p-1 grid grid-flow-col rounded-lg">
          <p className="flex col-span-2">
            <img
              className="h-12 w-12 mr-2 p-2"
              alt="Video Library"
              src="https://cdn-icons-png.flaticon.com/512/2989/2989835.png"
            />
          </p>
        </div>
      </div>
    );
  }
};
