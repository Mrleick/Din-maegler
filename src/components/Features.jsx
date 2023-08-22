import React from "react";
import styled from "styled-components";
import P from "../components/Paragraph";

const FeaturesDiv = styled.div`
  display: grid;
  height: 138px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: 1110px;
`;

function Features() {
  return (
    <FeaturesDiv>
      <div>
        <P weight="500" size="24px" text="Bestil et salgstjek"></P>
      </div>
      <div>
        <P weight="500" size="24px" text="74 butikker"></P>
      </div>
      <div>
        <P weight="500 " size="24px" text="Tilmeld køberkartotek"></P>
      </div>
    </FeaturesDiv>
  );
}

export default Features;
