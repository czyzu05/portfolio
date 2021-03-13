import React from "react";
import styled from "styled-components";

const ServicesElement = ({ title, icon, description }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30%;
  height: 250px;
  background-color: #191d2b;
  border: 1px solid #2e344e;
  border-top: 4px solid #2e344e;
  transition: 0.4s ease-in-out;

  &:hover {
    border-top: 4px solid #037fff;
  }
`;
const Icon = styled.div`
  padding: 20px;
  color: #037fff;
  font-size: 4rem;
`;
const Title = styled.h3`
  color: white;
  text-align: left;
  padding-left: 20px;
  font-size: 2.3rem;
  font-weight: 400;
`;
const Description = styled.p`
  color: #a4acc4;
  text-align: justify;
  padding: 18px 20px;
`;

export default ServicesElement;