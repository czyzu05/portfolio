import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMsg("");
    notify();
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_awuyjm9",
        "template_mjqkp6c",
        e.target,
        "vOlcdOItHhTR02k00"
      )
      .then(
        () => {
          clearForm();
        },
        (error) => {
          clearForm();
        }
      );
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleInputMsg = (e) => {
    setMsg(e.target.value);
  };

  const notify = () => {
    toast.success("Message was sent!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container>
      <Paragraph>Get In Touch</Paragraph>
      <FormContainer>
        <Form onSubmit={sendEmail}>
          <Label>
            <Input
              type="text"
              required
              name="name"
              value={name}
              onChange={handleInputName}
            />
            <Placeholder>Enter Your Name</Placeholder>
          </Label>
          <Label>
            <Input
              type="email"
              required
              name="email"
              value={email}
              onChange={handleInputEmail}
            />
            <Placeholder>Enter Your Email</Placeholder>
          </Label>
          <Label>
            <Input
              type="text"
              name="subject"
              required
              value={subject}
              onChange={handleInputSubject}
            />
            <Placeholder>Enter Your Subject</Placeholder>
          </Label>
          <Label>
            <TextArea
              value={msg}
              onChange={handleInputMsg}
              name="message"
              required
            />
            <Placeholder>Enter Your Message</Placeholder>
          </Label>
          <SubmitButton type="submit">Send Mail</SubmitButton>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
const Paragraph = styled.p`
  font-size: 2rem;
  color: #fff;
  font-weight: 400;
  text-transform: capitalize;
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: none;
  border: 1px solid #2e344e;
  margin: 15px 0px;
  width: 60rem;
  padding: 23px;
  appearance: none;
  outline: none;
  color: #a4acc4;
  font-size: 1.7rem;

  &:focus + span,
  &:valid + span {
    top: 13px;
    font-size: 1.5rem;
    background: #10121b;
  }

  @media screen and (max-width: 800px) {
    width: 40rem;
  }
  @media screen and (max-width: 604px) {
    width: 30rem;
  }
  @media screen and (max-width: 400px) {
    width: 20rem;
    font-size: 1.2rem;
  }
`;

const Label = styled.label`
  position: relative;
  font-size: 1.7rem;
  margin-bottom: 2px;
`;
const Placeholder = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  color: #a4acc4;
  transition: 0.3s ease;
`;
const TextArea = styled.textarea`
  background: none;
  border: 1px solid #2e344e;
  margin: 15px 0px;
  width: 60rem;
  height: 17rem;
  padding: 23px;
  appearance: none;
  outline: none;
  color: #a4acc4;
  font-size: 2rem;

  &:focus + span,
  &:valid + span {
    top: 13px;
    font-size: 1.5rem;
    background: #10121b;
  }

  @media screen and (max-width: 800px) {
    width: 40rem;
  }
  @media screen and (max-width: 604px) {
    width: 30rem;
  }
  @media screen and (max-width: 400px) {
    width: 20rem;
  }
`;

const SubmitButton = styled.button`
  width: 20rem;
  padding: 18px 25px;
  color: #fff;
  background-color: #037fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    z-index: 1;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: 0 0;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export default ContactForm;
