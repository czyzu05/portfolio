import { servicesData } from "../data/servicesData";
import ServicesElement from "./ServicesElement";
import styled from "styled-components";
import Title from "./Title";
import SectionContainer from "./SectionContainer";

const Services = () => {
  const services = servicesData.map((item) => (
    <ServicesElement key={item.title} {...item} />
  ));

  return (
    <SectionContainer>
      <Title>Services</Title>
      <FlexContainer>{services}</FlexContainer>
    </SectionContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;

  @media screen and (max-width: 805px) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export default Services;
