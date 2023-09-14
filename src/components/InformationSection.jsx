import React from "react";
import styled from "styled-components";
import { FaUser, FaPaperPlane, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

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

// Navbar Component
function infoBar() {
  return (
    <StyledBar>
      <StyledLogin>
        <LinksContainer>
          <StyledLink href="">
            <FaPaperPlane />
            4000@dinmaegler.com
          </StyledLink>
          <StyledLink href="">
            <FaPhone />
            +45 7070 4000
          </StyledLink>
        </LinksContainer>
        <Link to="Login" className="flex items-center text-[18px]">
          <FaUser className="w-[18px] h-[18px] mr-[8px]" />
          Log ind
        </Link>
      </StyledLogin>
    </StyledBar>
  );
}

export default infoBar;
