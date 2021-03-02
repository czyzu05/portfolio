import { FaBars } from "react-icons/fa";
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
  top: 5rem;
  transition: all 0.4s ease-out;
  transform: translateX(${({ isOpen }) => (isOpen ? "23rem" : "0")});
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

const HamburgerIcon = styled(FaBars)`
  color: white;
  font-size: 5rem;
`;

export default HamburgerMenu;
