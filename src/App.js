import React from "react";
import styled from "styled-components";
import logoImage from "./assets/logo.png";

// Styled-components
const NavBar = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 269px;
  height: 49px;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  flex: 6;
  justify-content: flex-end;
`;

const NavA = styled.a`
  text-decoration: none;
  color: black;
`;

function NavItem({ label, link }) {
  return (
    <NavItem>
      <NavA href={link}>{label}</NavA>
    </NavItem>
  );
}

function Navigation() {
  return (
    <NavBar>
      <LogoImage src={logoImage} alt="Din mægler logo" />
      <NavList>
        <NavItem label="Boliger til salg" link="/" />
        <NavItem label="Mæglere" link="/om-os" />
        <NavItem label="Mine favoritter" link="/kontakt" />
        <NavItem label="Kontakt os" link="/kontakt" />
      </NavList>
    </NavBar>
  );
}

export default Navigation;
