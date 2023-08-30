import React from "react";
import Features from "./Features";
import erfaring from "../assets/erfaring.png";
import HouseOne from "../assets/house1.png";
import HusTwo from "../assets/house2.png";

const About = () => {
  return (
    <>
      <div className="max-w-[1110px] grid grid-cols-2 mx-auto mt-[120px] mb-[70px] px-4 py-8">
        <img src={erfaring} alt="38 års erfaring" />
        <div className="omOs rounded-lg shadow-md">
          <h2 className="text-4xl font-bold">
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <p className="mt-4"> Det synes vi siger noget om os!</p>
          <p className="mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p className="mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex max-w-[490px] mt-[40px] gap-x-[93px]">
            <div className="flex max-w-[190px]">
              <div className="">
                <img className="w-[30px]" src={HouseOne} alt="icon" />
              </div>
              <div className="flex flex-col">
                <h3 className="">4829</h3>
                <p className="">boliger solgt</p>
              </div>
            </div>

            <div className="flex">
              <div className="">
                <img className="w-[30px]" src={HusTwo} alt="icon" />
              </div>
              <div className="flex flex-col">
                <h3 className="">158</h3>
                <p className="">boliger til salg</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300" />
        <Features />
      </div>
    </>
  );
};

export default About;
