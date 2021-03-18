import React from "react";
import styled from "styled-components";

const CertificateElement = ({ path, title, description }) => {
  return (
    <Wrapper>
      <Icon src={path} />
      <CertificateCode>{title}</CertificateCode>
      <CertificateDesc>{description}</CertificateDesc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  height: 22rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1370px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    height: 20rem;
    width: 50%;
  }
  @media screen and (max-width: 400px) {
    height: 20rem;
    width: 65%;
  }
`;

const Icon = styled.img`
  width: 8rem;
  height: 8rem;

  @media screen and (max-width: 600px) {
    width: 6rem;
    height: 6rem;
  }
`;

const CertificateCode = styled.h2`
  display: inline-block;
  padding: 10px;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const CertificateDesc = styled.p`
  color: #a4acc4;

  @media screen and (max-width: 1080px) {
    text-align: center;
  }
  @media screen and (max-width: 880px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export default CertificateElement;
