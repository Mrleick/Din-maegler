import React from "react";
import styled from "styled-components";
import Features from "./Features";
import P from "../components/Paragraph";
import erfaring from "../assets/erfaring.png";
import HusEt from "../assets/house1.png";
import HusTwo from "../assets/house2.png";

const OmOsBlock = styled.div`
  max-width: 1110px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledErfaringIMG = styled.img`
  max-width: 477px;
  height: 502px;
`;

const StyledHeader = styled.h2`
  width: 475px;
  font-size: 32px;
`;

const StyledOmOS = styled.div`
  margin-left: 93px;
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
      <OmOsBlock>
        <StyledErfaringIMG src={erfaring} alt="38 års erfaring" />
        <StyledOmOS>
          <StyledHeader>
            Vi har fulgt danskerne hjem i snart 4 årtier
          </StyledHeader>
          <P
            color="#162a41"
            size="18px"
            weight="bold"
            text="Det synes vi siger noget om os!"
          />
          <P
            color="#162a41"
            size="18px"
            margin="16px 0 0 0"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution."
          />
          <P
            margin="30px 0 0 0"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <StyledOmOsImgDiv>
            <HouseOneDiv>
              <HouseDiv>
                <StyledOmOsImg src={HusEt} alt="" />
              </HouseDiv>
              <CountContainer>
                <P weight="bold" text="4829" />
                <P text="boliger solgt" />
              </CountContainer>
            </HouseOneDiv>
            <HouseOneDiv>
              <HouseDiv>
                <StyledOmOsImg src={HusTwo} alt="" />
              </HouseDiv>
              <CountContainer>
                <P weight="bold" text="158" />
                <P text="boliger til salg" />
              </CountContainer>
            </HouseOneDiv>
          </StyledOmOsImgDiv>
        </StyledOmOS>
      </OmOsBlock>
      <StyledHr />
      <Features/>
    </>
  );
}

export default OmOs;
