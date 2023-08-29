import React from "react";
import styled from "styled-components";
import Features from "./Features";
import erfaring from "../assets/erfaring.png";
import HouseOne from "../assets/house1.png";
import HusTwo from "../assets/house2.png";

const StyledErfaringIMG = styled.img`
  max-width: 477px;
  height: 502px;
`;

const StyledOmOS = styled.div`
  display: grid;
  grid-template-rows: 108px 32px 90px 60px;
  width: 540px;
`;

const StyledOmOsImgDiv = styled.div`
  margin-top: 70px;
  width: 490px;
  height: 70px;
  display: flex;
  gap: 130px;
`;

const SharedDiv = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const HouseDiv = styled(SharedDiv)`
  margin-right: 20px;
  background-color: #eef7ff;
  align-items: center;
`;

const HouseOneDiv = styled.div`
  display: flex;
`;

const CountContainer = styled(SharedDiv)`
  flex-direction: column;
  width: 100px;
`;

const StyledOmOsImg = styled.img``;

const StyledHr = styled.hr`
  border: none;
  border-top: 2px solid #d3dee8;
  width: 1110px;
  margin: 0 auto;
`;

function OmOs() {
  return (
    <>
      <div className="max-w-[1110px] grid grid-cols-2 mx-auto mt-[120px] mb-[70px]">
        <StyledErfaringIMG src={erfaring} alt="38 års erfaring" />
        <StyledOmOS>
          <h2 className="text-4xl font-bold">
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <p> Det synes vi siger noget om os!</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <StyledOmOsImgDiv>
            <HouseOneDiv>
              <HouseDiv>
                <StyledOmOsImg src={HouseOne} alt="" />
              </HouseDiv>
              <CountContainer>
                <p>4829</p>
                <p>boliger solgt</p>
              </CountContainer>
            </HouseOneDiv>
            <HouseOneDiv>
              <HouseDiv>
                <StyledOmOsImg src={HusTwo} alt="" />
              </HouseDiv>
              <CountContainer>
                <p>158</p>
                <p>boliger til salg</p>
              </CountContainer>
            </HouseOneDiv>
          </StyledOmOsImgDiv>
        </StyledOmOS>
      </div>
      <StyledHr />
      <Features />
    </>
  );
}

export default OmOs;
