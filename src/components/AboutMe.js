import React from "react";
import styled from "styled-components";
import img from "../images/img.jpg";
import Button from "../components/Button";

const AboutMe = () => {
  return (
    <Container>
      <Header>
        <Title>About Me</Title>
        <span>About Me</span>
      </Header>
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

const Header = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 10rem;

  span {
    position: absolute;
    left: 0;
    top: 33%;
    font-size: 9rem;
    line-height: 1;
    font-weight: 900;
    color: rgba(25, 29, 43, 0.44);
    display: inline-block;
    text-transform: uppercase;
    z-index: -1;

    @media screen and (max-width: 891px) {
      font-size: 7rem;
    }
    @media screen and (max-width: 601px) {
      font-size: 5.3rem;
    }
    @media screen and (max-width: 451px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 321px) {
      font-size: 2.3rem;
    }
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 400;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 63%;
    bottom: 0;
    height: 5px;
    border-radius: 100px;
    width: 100px;
    background: rgba(3, 127, 255, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 63%;
    bottom: 0;
    height: 5px;
    border-radius: 100px;
    width: 35px;
    background: #037fff;
  }

  @media screen and (max-width: 601px) {
    font-size: 3rem;

    &::before {
      top: 50%;
    }
    &::after {
      top: 50%;
    }
  }
  @media screen and (max-width: 451px) {
    font-size: 2.3rem;

    &::before {
      top: 40%;
    }
    &::after {
      top: 40%;
    }
  }
  @media screen and (max-width: 321px) {
    font-size: 2rem;

    &::before {
      top: 32%;
      width: 70px;
    }
    &::after {
      top: 32%;
      width: 20px;
    }
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
