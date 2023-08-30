import React from "react";
import Features from "./Features";
import erfaring from "../assets/erfaring.png";
import HouseOne from "../assets/house1.png";
import HusTwo from "../assets/house2.png";

const About = () => {
  return (
    <>
      <div className="max-w-[1110px] grid grid-cols-2 mx-auto mt-[120px] mb-[70px]">
        <img src={erfaring} alt="38 års erfaring" />
        <div className="">
          <h2 className="text-4xl font-bold">
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <p className="mt-[32px] font-bold text-[24px]">
            Det synes vi siger noget om os!
          </p>
          <p className="mt-[8px] text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p className="mt-[20px] text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex max-w-[490px] mt-[40px]">
            <div className="flex max-w-[190px]">
              <div className="flex w-[70px] h-[70px] justify-center items-center bg-shape2">
                <img
                  className="w-[42px] h-[42px] block"
                  src={HouseOne}
                  alt="icon"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <h3 className="font-bold">4829</h3>
                <p className="">Boliger solgt</p>
              </div>
            </div>

            <div className="flex ml-[97px]">
              <div className="flex w-[70px] h-[70px] justify-center items-center bg-shape2">
                <img
                  className="w-[42px] h-[42px] block"
                  src={HusTwo}
                  alt="icon"
                />
              </div>
              <div className="flex flex-col ml-[20px]">
                <h3 className="font-bold">158</h3>
                <p className="">Boliger til salg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 w-[1110px] mx-auto" />
      <Features />
    </>
  );
};

export default About;
