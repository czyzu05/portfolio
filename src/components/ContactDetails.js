import React from "react";
import {contactData} from '../data/contactData'
import styled from 'styled-components'
import ContactElement from './ContactElement'

const ContactDetails = () => {

  const contactDetails = contactData.map(item => (
    <ContactElement key={item.title} {...item} />
  ))

  return (
    <Wrapper>
      {contactDetails}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  padding-left: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default ContactDetails;
