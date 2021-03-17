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
`;

const Icon = styled.img`
  width: 8rem;
  height: 8rem;
`;

const CertificateCode = styled.h2`
  display: inline-block;
  padding: 10px;
  color: #fff;
`;

const CertificateDesc = styled.p`
  color: #a4acc4;
`;

export default CertificateElement;
