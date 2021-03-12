import React from "react";
import styled from "styled-components";
import img from "../images/img.jpg";
import Button from "../components/Button";
import Title from "./Title";

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <MainSection>
        <Image src={img} />
        <Information>
          <h2>
            I am <span>Damian Czyż</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi
            enim, vestibulum tincidunt scelerisque at, malesuada vitae diam. Sed
            sed consectetur augue. Quisque lectus lacus, sagittis luctus urna
            in, ornare interdum leo.
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
              <b>Languages</b> Example text
            </li>
          </ul>
          <Button>Download CV</Button>
        </Information>
      </MainSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  padding: 50px;
  margin: 0 auto;

  @media screen and (max-width: 1301px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 801px) {
    max-width: 600px;
  }
  @media screen and (max-width: 601px) {
    max-width: 450px;
  }
  @media screen and (max-width: 451px) {
    max-width: 320px;
  }
  @media screen and (max-width: 321px) {
    max-width: 100%;
  }
`;

const MainSection = styled.div`
  width: 100%;
  margin-top: 60px;

  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  flex: 3;
  width: 230px;
  height: 400px;
  border-radius: 10px;
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
`;

export default AboutMe;
