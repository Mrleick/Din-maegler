import React from "react";
import SearchForm from "./SearchForm";

const HeroSection = () => {
  return (
    <div className="h-[700px] bg-hero bg-bottom bg-[#55555580] bg-blend-multiply max-w-[1920px] mx-auto">
      <h2 className="text-5xl text-white text-center pt-[196px] font-bold mb-10">
        Søg efter din drømmebolig
      </h2>
      <SearchForm />
    </div>
  );
};

export default HeroSection;
