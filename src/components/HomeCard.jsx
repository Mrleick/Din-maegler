import React from "react";
import styled from "styled-components";

const HomeCardDiv = styled.div`
  border-radius: 5px;
  display: grid;
  background-color: white;
`;

const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const HomeCardText = styled.div`
padding: 30px 24px;
`;

const HomeCard = ({ data }) => {
  const adress1And2 =
    data.adress1 + (data.adress2 ? ` •  ${data.adress2}` : "");
  return (
    <HomeCardDiv>
      <HomeImage src={data.images[0].url} alt="" />
      <HomeCardText>
        <p className="font-medium text-2xl">{adress1And2}</p>
        <p>
          {data.postalcode} {data.city}
        </p>

        <p>
          <span className="font-medium">{data.type}</span> • Ejerudgift:{" "}
          {data.cost}
        </p>
      </HomeCardText>
    </HomeCardDiv>
  );
};

export default HomeCard;
