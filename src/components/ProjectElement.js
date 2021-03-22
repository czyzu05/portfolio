import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProjectElement = ({ title, description, technologies, img, path }) => {
  return (
    <Wrapper>
      <InformationContainer>
        <Image src={img} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>Used Technologies</Title>
        <Technologies>{technologies}</Technologies>
        <RepositoryLink to={{ pathname: `${path}` }} target="_blank">
          REPOSITORY
        </RepositoryLink>
      </InformationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: calc(50% - 90px);
  text-align: center;
  margin: 30px;
  height: 57rem;
  border: 1px solid #2e344e;
  padding: 25px;

  @media screen and (max-width: 1400px) {
    padding: 25px;
    flex-basis: calc(53% - 100px);
    height: 64rem;
  }
  @media screen and (max-width: 895px) {
    padding: 25px;
    margin: 15px auto;
    flex-basis: calc(77% - 100px);
  }
  @media screen and (max-width: 770px) {
    padding: 35px;
    flex-basis: 80%;
  }
  @media screen and (max-width: 603px) {
    padding: 25px;
    flex-basis: 90%;
    height: 66rem;
  }
  @media screen and (max-width: 450px) {
    padding: 15px;
    flex-basis: 100%;
    height: 60rem;
  }
  @media screen and (max-width: 360px) {
    height: 50rem;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RepositoryLink = styled(Button)`
  width: 16rem;
  padding: 20px 27px;
  font-size: 1.2rem;

  @media screen and (max-width: 350px) {
    width: 12rem;
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 70%;
  height: 18rem;
  border-radius: 3px;
  margin-bottom: 20px;

  @media screen and (max-width: 1300px) {
    width: 90%;
    height: 20rem;
  }

  @media screen and (max-width: 890px) {
    width: 77%;
  }
  @media screen and (max-width: 605px) {
    height: 16.5rem;
  }
  @media screen and (max-width: 400px) {
    height: 15rem;
  }
  @media screen and (max-width: 365px) {
    height: 10rem;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 400;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  padding: 20px;
  color: #a4acc4;
  text-align: justify;
  line-height: 1.4;

  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 1.3rem;
  }
`;

const Technologies = styled.p`
  padding-top: 10px;
  color: #a4acc4;
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 1.3rem;
  }
`;

export default ProjectElement;
