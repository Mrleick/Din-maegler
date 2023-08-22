import React from "react";
import styled from "styled-components";
import P from "../components/Paragraph";

import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const FeaturesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 70px auto 150px;
  max-width: 1110px; /* Changed width to max-width */
`;

const FeaturesImgDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #eef7ff;
  width: 50px;
  height: 50px;
  justify-content: center;
  margin-right: 20px;
`;

const FeatureImage = styled.img``;

const FeaturesText = styled.div`
  max-width: 250px;
`;

const FeatureContainer = styled.div`
  display: flex;
`;

function Features() {
  return (
    <FeaturesDiv>
      <FeatureContainer>
        <FeaturesImgDiv>
          <FeatureImage src={feature1} alt="" />
        </FeaturesImgDiv>
        <FeaturesText>
          <P size="24px " weight="bold" text="Bestil et salgstjek" />
          <P text="Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig." />
        </FeaturesText>
      </FeatureContainer>
      <FeatureContainer>
        <FeaturesImgDiv>
          <FeatureImage src={feature2} alt="" />
        </FeaturesImgDiv>
        <FeaturesText>
          <P size="24px" weight="bold" text="74 butikker" />
          <P text="Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig." />
        </FeaturesText>
      </FeatureContainer>
      <FeatureContainer>
        <FeaturesImgDiv>
          <FeatureImage src={feature3} alt="" />
        </FeaturesImgDiv>
        <FeaturesText>
          <P size="24px" weight="bold" text="Tilmeld køberkartotek" />
          <P
            color="#2A2C30"
            text="Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig."
          />
        </FeaturesText>
      </FeatureContainer>
    </FeaturesDiv>
  );
}

export default Features;
