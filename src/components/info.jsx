import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Constants
const whiteColor = "#fff";
const marginBetweenLinks = "17px";

// Styled Components
const StyledBar = styled.div`
  background-color: #162a41;
  padding: 10px;
  color: ${whiteColor};
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LinksContainer = styled.div`
  display: flex;
`;

const StyledLogin = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const StyledLink = styled.a`
  color: ${whiteColor};
  text-decoration: none;
  margin-right: ${marginBetweenLinks};
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 5px;
  }
`;

const StyledText = styled.p`
  color: ${whiteColor};
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
`;

// Navbar Component
function infoBar() {
  return (
    <StyledBar>
      <StyledLogin>
        <LinksContainer>
          <StyledLink href="">
            <FontAwesomeIcon icon={faPaperPlane} />
            4000@dinmaegler.com
          </StyledLink>
          <StyledLink href="">
            <FontAwesomeIcon icon={faPhone} />
            +45 7070 4000
          </StyledLink>
        </LinksContainer>
        <StyledText>
          <FontAwesomeIcon icon={faUser} /> Log In
        </StyledText>
      </StyledLogin>
    </StyledBar>
  );
}

export default infoBar;
