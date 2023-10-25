import React, {useCallback} from "react";
import styled from "styled-components";
import Particles from "react-particles";
import Typed from "react-typed";
import Button from "../components/Button";
import Container from "../components/Container";
import { particlesConfig } from "../config/particle-config";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <HomeContainer>
       <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesConfig}
/>
      <Title>
        Hi, I am <span>Damian Czyż</span>
      </Title>
      <SubTitle>
        <Typed
          strings={[
            "Enthusiastic Front-End Developer specializing in React and Next.js",
            "2+ years of commercial experience",
            "Familiar with mobile development in React Native",
          ]}
          typeSpeed={40}
          backSpeed={80}
          backDelay={2000}
          loop
        />
      </SubTitle>
      <Button to="/contact">Contact me</Button>
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: block;
  font-size: 5.5rem;
  color: #fff;

  span {
    color: #037fff;
  }

  @media screen and (max-width: 896px) {
    font-size: 4.2rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 346px) {
    font-size: 2.3rem;
  }
`;

const SubTitle = styled.div`
  margin-top: 30px;
  font-size: 2.5rem;
  color: white;

  @media screen and (max-width: 580px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 346px) {
    font-size: 1.3rem;
  }
`;

export default Home;
