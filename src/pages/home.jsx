import React from "react";
import styled from "styled-components";
import Info from "../components/info";
import Navi from "../components/navigation";
import heroimg from "../assets/hero.jpg";
import Paragraph from "../components/paragraph";

// Styled-component for the Main container
const Main = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;
const HeroDiv = styled.div`
  position: relative;
`;

const HeroImgStyled = styled.img`
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

const SearchBar = styled.div`
  position: absolute;
  z-index: 2;
  top: 42%;
  left: 20%;
  width: 920px;
  height: 202px;
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

function App() {
  return (
    <div>
      <Info />
      <Navi />
      <HeroDiv>
        <HeroImgStyled src={heroimg} alt="Hero" />
        <Overlay />
        <HeroHeader>Søg efter din drømmebolig</HeroHeader>
        <SearchBar>
          <Paragraph
            color="#162a41"
            size="20px"
            weight="bold"
            text="Søg blandt 158 boliger til salg i 74 butikker "
          ></Paragraph>
        </SearchBar>
      </HeroDiv>
      <Main></Main>
    </div>
  );
}

export default App;
