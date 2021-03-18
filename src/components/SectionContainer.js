import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1300px;

  padding: 50px;
  margin: 0 auto;

  @media screen and (max-width: 1301px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 801px) {
    max-width: 700px;
  }
  @media screen and (max-width: 601px) {
    max-width: 450px;
  }
  @media screen and (max-width: 451px) {
    max-width: 420px;
  }
  @media screen and (max-width: 321px) {
    max-width: 100%;
    padding-left: 15px;
  }
`;

export default SectionContainer;
