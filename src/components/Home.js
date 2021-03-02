import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <h1>Home Component</h1>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin-left: 30rem;
  width: calc(100vw - 30rem);
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    width: 100%;
  }
`;

export default Home;
