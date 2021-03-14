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
  margin-top: 50px;
`;

export default Services;
