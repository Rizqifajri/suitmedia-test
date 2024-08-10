import React, { useEffect, useState } from "react";
import jumbotronImg from "../assets/jumbotron.jpg";
import Wavy from "../assets/wavy.jsx";

const Banner = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        <img
          className="w-full h-full object-cover"
          src={jumbotronImg}
          alt="Banner Image"
        />
      </div>
      <div
        className="absolute top-1/2 left-[42%] transform -translate-x-1/2 -translate-y-1/2 text-center"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        <h1 className="text-5xl text-white font-bold">Ideas</h1>
        <h2 className="text-3xl text-white">What can we do for you?</h2>
      </div>
      <div className="absolute bottom-0 w-full">
        <Wavy />
      </div>
    </div>
  );
};

export default Banner;
