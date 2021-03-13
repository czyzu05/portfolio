import { servicesData } from "../data/servicesData";
import ServicesElement from "./ServicesElement";
import styled from "styled-components";
import Title from "./Title";

const Services = () => {
  const services = servicesData.map((item) => (
    <ServicesElement key={item.title} {...item} />
  ));

  return (
    <Container>
      <Title>Services</Title>
      <FlexContainer>{services}</FlexContainer>
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export default Services;
