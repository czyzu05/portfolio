import React from "react";
import { contactData } from "../data/contactData";
import styled from "styled-components";
import ContactElement from "./ContactElement";

const ContactDetails = () => {
  const contactDetails = contactData.map((item) => (
    <ContactElement key={item.title} {...item} />
  ));

  return <Wrapper>{contactDetails}</Wrapper>;
};

const Wrapper = styled.div`
  flex: 1;
  padding-left: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1400px) {
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 50px;
  }
  @media screen and (max-width: 850px) {
    width: 80%;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export default ContactDetails;
