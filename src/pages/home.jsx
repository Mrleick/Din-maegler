import React from "react";
import styled from "styled-components";
import heroimg from "../assets/hero.jpg";
import pind from "../assets/pind.png";

import Info from "../components/info";
import Navi from "../components/navigation";
import Paragraph from "../components/paragraph";

const StyledMain = styled.div`
  max-width: 1110px;
  margin: 0 auto;
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

const SearchInnerDiv = styled.div`
  width: 857px;
  height: 138px;
  margin: 40px auto;
  display: grid;
  grid-template-rows: 30px 4px 28px 48px;
`;

const SearchPind = styled.img`
  width: 45px;
`;

const SearchInput = styled.input`
  width: 700px;
  height: 48px;
  font-size: 18px;
  margin-top: 7px;
  margin-right: 10px;
  border-radius: 4px;
  border-color: grey;
  padding-left: 10px;
`;

const SearchField = styled.div`
  margin-top: 20px;
`;

const SearchButton = styled.button`
  width: 120px;
  height: 51px;
  grid-row: 3/4;
  background-color: #162a41;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

function SearchForm() {
  return (
    <SearchInnerDiv>
      <Paragraph
        color="#162a41"
        size="20px"
        weight="bold"
        text="Søg blandt 158 boliger til salg i 74 butikker"
      />
      <SearchPind src={pind} alt="linje" />

      <SearchField>
        <Paragraph
          color="#162a41"
          size="20px"
          height="28px"
          text="Hvad skal din næste bolig indeholde"
        />
        <SearchInput placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende." />
        <SearchButton>Søg</SearchButton>
      </SearchField>
    </SearchInnerDiv>
  );
}

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

function App() {
  return (
    <div>
      <Info />
      <Navi />
      <HeroSection />
      <StyledMain />
    </div>
  );
}

export default App;
