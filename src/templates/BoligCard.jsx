import React from "react";
import styled from "styled-components";
import P from "../components/Paragraph";
import cardimg from "../assets/card.png";

const StyledCard = styled.div`
  max-width: 540px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledCardImg = styled.img``;

const StyledHr = styled.hr`
  border: none;
  border-top: 2px solid #d3dee8;
  width: 492px;
`;

function Card() {
  return (
    <StyledCard>
      <StyledCardImg src={cardimg} alt="Bolig" />
      <P weight="bold" text="Klosterengen 234" />
      <P text="4000 Roskilde" />
      <P text="Villa • Ejerudgift: 4.567 kr." />
      <StyledHr />
    </StyledCard>
  );
}

export default Card;
