import React from "react";
import styled from "styled-components";

const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 225px;
  object-fit: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const HomeCard = ({ data }) => {
  const adress1And2 =
    data.adress1 + (data.adress2 ? ` •  ${data.adress2}` : "");

  return (
    <div className="w-[100%] max-w-[540px] shadow-xl">
      <HomeImage src={data.images[0].url} alt="" />
      <div className="py-[26px] px-[24px]">
        <p className="font-medium text-2xl mb-[10px]">{adress1And2}</p>
        <p className="mb-[10px]">
          {data.postalcode} {data.city}
        </p>

        <p className="mb-[14px]">
          <span className="font-medium text-[20px]">{data.type}</span> •
          Ejerudgift: {data.cost}
        </p>
        <div className="w-[100%] max-w-[492px] mb-[16px] mx-auto border border-shape01" />

        <p className="text-[20px] font-medium text-right">
          Kr. {data.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
