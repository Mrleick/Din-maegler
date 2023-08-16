import React from "react";
import styled from "styled-components";
import heroimg from "../assets/hero.jpg";

const HeroDiv = styled.div`
  position: relative;
`;

const HeroImgStyled = styled.img`
  max-width: 1920px;
  width: 100%;
  height: auto;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

function Hero() {
  return (
    <HeroDiv>
      <HeroImgStyled src={heroimg} alt="Hero" />
      <Overlay />
      <HeroHeader>Søg efter din drømmebolig</HeroHeader>
    </HeroDiv>
  );
}

export default Hero;
