import React from "react";
import styled from "styled-components";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

const ProjectElement = ({ title, description, technologies, img }) => {
  return (
    <Wrapper>
      <InformationContainer>
        <ImgWrap>
          <Image src={img} />
          <ImgIcons>
            <ul>
              <li>
                <LiveIcon />
              </li>
              <li>
                <GithubIcon />
              </li>
            </ul>
          </ImgIcons>
        </ImgWrap>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>Used Technologies</Title>
        <Technologies>{technologies}</Technologies>
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
  padding: 45px;

  @media screen and (max-width: 1450px) {
    padding: 25px;
    flex-basis: calc(53% - 100px);
  }
  @media screen and (max-width: 840px) {
    padding: 35px;
    flex-basis: calc(70% - 100px);
  }
  @media screen and (max-width: 770px) {
    padding: 35px;
    flex-basis: 80%;
  }
  @media screen and (max-width: 590px) {
    padding: 25px;
    flex-basis: 90%;
  }
  @media screen and (max-width: 450px) {
    padding: 15px;
    flex-basis: 100%;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 95%;
  height: 25rem;

  border-radius: 3px;
  @media screen and (max-width: 1300px) {
    width: 90%;
    height: 20rem;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    height: 15rem;
  }
  @media screen and (max-width: 365px) {
    height: 10rem;
  }
`;
const ImgWrap = styled.figure`
  width: 95%;
  height: 25rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    width: 80%;
    height: 20rem;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    height: 15rem;
  }
  @media screen and (max-width: 365px) {
    height: 10rem;
  }
`;
const ImgIcons = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 30px;

  ul {
    margin: 0;
    padding: 0;
    position: absolute;
    list-style-type: none;
    right: 15px;
    bottom: 30px;
    display: flex;

    li {
      margin: 0 15px;
      transform: translateY(80px);
      &:nth-child(1) {
        transition: 0.4s 0.05s;
      }
      &:nth-child(2) {
        transition: 0.4s 0.1s;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 100;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.5);
    clip-path: polygon(0 100%, 100% 0, 100% 100%);
    transition: 0.5s ease;
  }

  &:hover {
    li {
      transform: translateY(0);
    }
    &::before {
      height: 150px;
    }
  }
`;

const LiveIcon = styled(GoLinkExternal)`
  color: #fff;
  font-size: 3rem;
  transition: 0.5s ease;

  &:hover {
    color: black;
  }
`;
const GithubIcon = styled(GoMarkGithub)`
  color: #fff;
  font-size: 3rem;
  transition: 0.5s ease;

  &:hover {
    color: black;
  }
`;

const Title = styled.h2`
  color: #fff;
  padding-top: 15px;
  font-weight: 400;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  padding: 20px;
  color: #a4acc4;
  text-align: justify;
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 1rem;
  }
`;

const Technologies = styled.p`
  padding-top: 10px;
  color: #a4acc4;
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 1rem;
  }
`;

export default ProjectElement;
