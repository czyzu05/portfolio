import React from "react";
import styled from "styled-components";

const SkillElement = ({ title, icon }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Text>{title}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(23% - 50px);
  padding: 25px;
  background-color: #191d2b;
  border: 1px solid #2e344e;
  margin: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 860px) {
    width: calc(30% - 50px);
  }
  @media screen and (max-width: 600px) {
    width: calc(44% - 50px);
  }
  @media screen and (max-width: 455px) {
    width: calc(60% - 50px);
    padding: 10px;
  }

  &:nth-child(1):hover {
    div {
      color: #037fff;
    }
  }
  &:nth-child(2):hover {
    div {
      color: #764abc;
    }
  }
  &:nth-child(3):hover {
    div {
      color: #f0db4f;
    }
  }
  &:nth-child(4):hover {
    div {
      color: #2965f1;
    }
  }
  &:nth-child(5):hover {
    div {
      color: #e34c26;
    }
  }
  &:nth-child(6):hover {
    div {
      color: #602c50;
    }
  }
  &:nth-child(7):hover {
    div {
      color: #037fff;
    }
  }
  &:nth-child(8):hover {
    div {
      color: #007acc;
    }
  }
  &:nth-child(9):hover {
    div {
      color: #000;
    }
  }
  &:nth-child(10):hover {
    div {
      color: #fff;
    }
  }
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #9ca4bb;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 700px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;

const Text = styled.h3`
  font-size: 2.3rem;
  color: #a4acc4;
  font-weight: 400;
  letter-spacing: 1.2px;

  @media screen and (max-width: 1250px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export default SkillElement;
