import {Link} from 'react-router-dom'
import styled from "styled-components";

const Button = styled(Link)`
  display: block;
  text-decoration: none;
  width: 20rem;
  text-align: center;
  margin-top: 38px;
  padding: 18px 25px;
  color: #fff;
  background-color: #037fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    z-index: 1;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: 0 0;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`;

export default Button;
