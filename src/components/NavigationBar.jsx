import React from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;
`;
// Styled-component til logoet
const LogoImage = styled.img`
  width: 296px;
  height: 49px;
  cursor: pointer;
`;

// Styled-component til ul-elementet
const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  flex: 6;
  justify-content: flex-end;
`;

// Styled-component til li-elementer
const NavItem = styled.li``;

function Navigation() {
  return (
    <NavBar>
      <Link to="/">
        <LogoImage src={logoImage} alt="Din mægler logo" />
      </Link>
      <NavList>
        <NavItem>
          <Link to="/boliger">Boliger til salg</Link>
        </NavItem>
        <NavItem>
          <Link to="/mæglere">Mæglere</Link>
        </NavItem>
        <NavItem>
          <Link to="/favoritter">Mine favoritter</Link>
        </NavItem>
        <NavItem>
          <Link to="/kontakt">Kontakt os</Link>
        </NavItem>
      </NavList>
    </NavBar>
  );
}

export default Navigation;
