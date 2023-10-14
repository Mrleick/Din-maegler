import React, { useState } from "react";
import Slider from "react-slider";
import HomeCard from "../components/HomeCard";
import Banner from "../components/Banner";
import GetHomes from "../hooks/GetHomes";

const Propertylist = () => {
  // Min homes data fra api 
  const Homes = GetHomes();

  const [selectedPropertyType, setSelectedPropertyType] = useState("type");
  const [priceRange, setPriceRange] = useState([0, 12000000]);

  const handleChange = (newValues) => setPriceRange(newValues);

  // Filtrer boliger baseret på den valgte ejendomstype
  const filteredByPropertyType =
    selectedPropertyType === "type"
      ? Homes
      : Homes.filter((home) => home.type === selectedPropertyType);

  // Filtrer boliger baseret på prisintervallet
  const filteredHomes = filteredByPropertyType.filter(
    (home) => home.price >= priceRange[0] && home.price <= priceRange[1]
  );

  return (
    <>
      <Banner title="Boliger til salg" />
      <div className="max-w-[1110px] mx-auto py-10">
        <h3 className="text-xl">Søg efter dit drømmehus</h3>
        <div className="w-10 h-1 bg-primary mb-6 mt-1"></div>
        <div className="flex">
          <div className="flex">
            <label className="flex flex-col">
              Ejendomstype
              <select
                className="text-para02 pl-[10px] w-[335px] h-[48px] mr-[12px] border border-shape01"
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
              >
                <option value="type">Ejendomstype</option>
                <option value="Villa">Villa</option>
                <option value="Landejendom">Landejendom</option>
                <option value="Byhus">Byhus</option>
                <option value="Ejerlejlighed">Ejerlejlighed</option>
              </select>
            </label>
          </div>

          <div className="max-w-[540px]">
            <h2>Pris-interval</h2>
            <Slider
              className="slider relative"
              value={priceRange}
              onChange={handleChange}
              min={0}
              max={12000000}
            />
            <div className="flex w-[540px] justify-between">
              <div>
                <input className="max-w-[16px]" type="text" id="minPrice" />
              </div>
              <div>
                <input className="max-w-[16px]" type="text" id="maxPrice" />
              </div>
            </div>
            <div className="flex justify-between with-[540px]">
              <label>{priceRange[0].toLocaleString()} kr.</label>
              <label>{priceRange[1].toLocaleString()} kr.</label>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-[60px]">
          {filteredHomes.map((home) => (
            <HomeCard key={home.id} data={home} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Propertylist;
