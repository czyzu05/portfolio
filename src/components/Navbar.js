import React from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "../data/menuData";
import styled from "styled-components";
import avatar from "../images/avatar.png";

const Navbar = ({ isOpen }) => {
  return (
    <Nav isOpen={isOpen}>
      <NavContainer>
        <NavImageContainer>
          <NavImg />
        </NavImageContainer>

        <NavMenuContainer>
          {menuData.map((item, index) => (
            <NavMenuLink to={item.path} exact key={index}>
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
  top: 0;
  left: 0;
  width: 30rem;
  height: 100vh;
  background-color: #191d2b;
  border-right: 1px solid #2e344e;
  transform: translateX(0);
  transition: all 0.4s ease-out;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    width: 23rem;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavImageContainer = styled.div`
  flex: 3;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavImg = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 6px solid #2e344e;
  background-image: url(${avatar});
  background-position: center;
  background-size: cover;
  background-color: #fff;

  @media screen and (max-width: 1200px) {
    width: 15rem;
    height: 15rem;
  }
`;

const NavMenuContainer = styled.div`
  flex: 8;
  width: 100%;
  border-top: 1px solid #2e344e;
  border-bottom: 1px solid #2e344e;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavMenuLink = styled(NavLink)`
  display: block;
  position: relative;
  width: 100%;
  text-align: center;
  color: #a4acc4;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 0;
  letter-spacing: 1px;
  font-size: 1.5rem;
  text-transform: uppercase;

  &.active {
    background-color: #037fff;
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 100%;
    height: 100%;
    width: 0;
    background: rgba(3, 127, 255, 0.2);
    visibility: hidden;
    transition: all 0.4s ease-out;
    z-index: -1;
  }

  &:hover {
    color: #037fff;
    &::before {
      width: 100%;
      visibility: visible;
    }
    &.active {
      color: #fff;
    }
  }
`;

const NavFooterContainer = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyrightInfo = styled.p`
  color: #a4acc4;
  font-size: 1.5rem;
`;

export default Navbar;
