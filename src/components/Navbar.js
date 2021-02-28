import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/menuData";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <HamburgerMenu />
      <NavContainer>
        <NavImageContainer>
          <NavImg />
        </NavImageContainer>

        <NavMenuContainer>
          {menuData.map((item, index) => (
            <NavMenuLink to={item.path} key={index}>
              {item.title}
            </NavMenuLink>
          ))}
        </NavMenuContainer>

        <NavFooterContainer>
          <CopyrightInfo>&copy; 2021 Damian Czyż</CopyrightInfo>
        </NavFooterContainer>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;

  @media (max-width: 1200px) {
    top: 3rem;
    left: 0;
  }
`;

const NavContainer = styled.div`
  top: 0;
  left: 0;
  width: 18.5rem;
  height: 100vh;
  background-color: green;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavImageContainer = styled.div`
  flex: 3;
  background-color: purple;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavImg = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: 6px solid #330033;
  background-color: #fff;
`;

const NavMenuContainer = styled.div`
  flex: 8;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: orange;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const NavMenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const NavFooterContainer = styled.div`
  flex: 1;
  background-color: gray;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const CopyrightInfo = styled.p`
  font-size: 1.2rem;
`;

const HamburgerMenu = styled(FaBars)`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export default Navbar;
