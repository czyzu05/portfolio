import React from "react";
import styled from "styled-components";

const ContactElement = ({ icon, title, value }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Information>
        <Header>{title}</Header>
        <Value>{value}</Value>
      </Information>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 15rem;
  width: 100%;
  background-color: #191d2b;
  padding: 25px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 1400px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Icon = styled.div`
  border: 1px solid #2e344e;
  padding: 20px;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a4acc4;

  @media screen and (max-width: 602px) {
    font-size: 3rem;
    padding: 15px;
  }
  @media screen and (max-width: 430px) {
    font-size: 2rem;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;

  @media screen and (max-width: 380px) {
    padding: 0px;
    align-items: center;
    margin-top: 10px;
  }
`;

const Header = styled.h4`
  color: #fff;
  text-transform: capitalize;
  padding-bottom: 10px;

  @media screen and (max-width: 430px) {
    font-size: 1.2rem;
  }
`;

const Value = styled.p`
  color: #a4acc4;

  @media screen and (max-width: 602px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

export default ContactElement;
