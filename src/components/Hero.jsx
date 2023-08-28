import React from "react";
import styled from "styled-components";
import heroimg from "../assets/hero.jpg";
import SearchForm from "./SearchForm";

const SearchDiv = styled.div`
  position: absolute;
  z-index: 2;
  top: 42%;
  left: 20%;
  width: 920px;
  height: 202px;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;

const StyledHeroDiv = styled.div`
  position: relative;
`;

const StyledHeroImg = styled.img`
  max-width: 1920px;
  width: 100%;
  height: 668px;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeroHeader = styled.h1`
  z-index: 2;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 50px;
`;

function HeroSection() {
  return (
    <StyledHeroDiv>
      <StyledHeroImg src={heroimg} alt="Hero" />
      <Overlay />
      <HeroHeader>Søg efter din drømmebolig</HeroHeader>
      <SearchDiv>
        <SearchForm />
      </SearchDiv>
    </StyledHeroDiv>
  );
}

export default HeroSection;
