import React from "react";
import styled from "styled-components";
import img from "../images/img.jpg";
import Button from "../components/Button";
import Title from "./Title";
import SectionContainer from "./SectionContainer";

const AboutMe = () => {
  return (
    <SectionContainer>
      <Title>About Me</Title>
      <MainSection>
        <Image src={img} />
        <Information>
          <h2>
            I am <span>Damian Czyż</span>
          </h2>
          <p>
            I am a last-year student of IT and Econometrics studies.
            My main goal is to find an opportunity which gives me a chance to delve further into a subject of computer science and
            enhance my knowlege in JavaScript with <span style={{color: '#037FFF'}}>React</span>.
            By creating a clear and semantically correct code, I always try to design and implement a good user interface which provides the best user experience.
          </p>
          <ul>
            <li>
              <b>My name</b> Damian Czyż
            </li>
            <li>
              <b>Age</b> 22 Years
            </li>
            <li>
              <b>Location</b> Cracow, Poland
            </li>
            <li>
              <b>Languages</b> Polish, English
            </li>
          </ul>
          <Button to="/CV-Damian-Czyz.pdf" target="_blank" download>
            Download CV
          </Button>
        </Information>
      </MainSection>
    </SectionContainer>
  );
};

const MainSection = styled.div`
  width: 100%;
  margin-top: 60px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 805px) {
    flex-direction: column;

    img {
      margin: 0 auto;
      padding-bottom: 50px;
    }
  }
  @media screen and (max-width: 300px) {
    margin-top: 10px;
  }
`;

const Image = styled.img`
  flex: 3;
  width: 230px;
  height: 400px;
  border-radius: 10px;

  @media screen and (max-width: 300px) {
    width: 170px;
    height: 250px;
  }
`;
const Information = styled.div`
  flex: 10;
  padding-left: 50px;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;

  p {
    padding-top: 15px;
    text-align: justify;
    color: #a4acb9;
    line-height: 1.5;
  }
  span {
    color: #037fff;
  }

  ul {
    list-style-type: none;
    margin-top: 30px;

    li {
      color: #a4acb9;
      padding-top: 10px;
      display: flex;

      b {
        min-width: 130px;
        display: inline-block;
        position: relative;
        margin-right: 7px;

        &::after {
          content: ":";
          position: absolute;
          top: 0;
          left: auto;
          right: 0;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
    padding-left: 0px;
  }
`;

export default AboutMe;
