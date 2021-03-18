import React from "react";
import { certificatesData } from "../data/certificatesData";
import styled from "styled-components";
import CertificateElement from "../components/CertificateElement";

const Certificates = () => {
  const certificates = certificatesData.map((certificate) => (
    <CertificateElement key={certificate.title} {...certificate} />
  ));

  return <Wrapper>{certificates}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 400px) {
    margin-top: 1.4rem;
    justify-content: center;
  }
`;

export default Certificates;
