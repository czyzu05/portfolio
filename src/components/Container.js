import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-left: 30rem;
  width: calc(100vw - 30rem);
  min-height: 100vh;
  z-index: 2;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    width: 100%;
  }
`;

export default Container;
