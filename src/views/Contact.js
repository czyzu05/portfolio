import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <Container>
      <SectionContainer>
        <Title>Contact Me</Title>
        <MainSection>
          <ContactForm />
          <ContactDetails />
        </MainSection>
      </SectionContainer>
    </Container>
  );
};

const MainSection = styled.div`
  width: 100%;
  margin-top: 60px;

  display: flex;
  justify-content: space-between;
`;

export default Contact;
