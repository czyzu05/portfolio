import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <HamburgerWrapper isOpen={isOpen} onClick={toggle}>
      <HamburgerIcon />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  position: fixed;
  top: 3rem;
  transition: all 0.4s ease-out;
  transform: translateX(${({ isOpen }) => (isOpen ? "23rem" : "0")});
  display: none;
  padding: 7px;
  font-size: .3rem;
  background-color: #191d2b;
  border: 1px solid #2e344e;
  border-left: none;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

const HamburgerIcon = styled(IoIosMenu)`
  color: white;
  font-size: 4rem;

  @media screen and (max-width: 700px) {
    font-size: 4rem;
  }
`;

export default HamburgerMenu;
