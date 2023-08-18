import React from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;
`;
// Styled-component til logoet
const LogoImage = styled.img`
  width: 269px;
  height: 49px;
  cursor: pointer;
`;

// Styled-component til ul-elementet
const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  flex: 6;
  justify-content: flex-end; // This aligns the ul to the right
`;

// Styled-component til li-elementer
const NavItem = styled.li``;

const NavA = styled.a`
  text-decoration: none;
  color: black;
`;
function Navigation() {
  return (
    <NavBar>
      <LogoImage src={logoImage} alt="Din mægler logo" />
      <NavList>
        <NavItem>
          <NavA href="/">Boliger til salg</NavA>
        </NavItem>
        <NavItem>
          <NavA href="/om-os">Mæglere</NavA>
        </NavItem>
        <NavItem>
          <NavA href="/kontakt">Mine favoritter</NavA>
        </NavItem>
        <NavItem>
          <NavA href="/kontakt">Kontakt os</NavA>
        </NavItem>
      </NavList>
    </NavBar>
  );
}

export default Navigation;
