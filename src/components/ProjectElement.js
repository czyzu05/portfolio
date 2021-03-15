import React from "react";
import styled from "styled-components";

const ProjectElement = ({ title, description, technologies, img }) => {
  return (
    <Wrapper>
      <InformationContainer>
        <Image src={img} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>Used Technologies</Title>
        <Technologies>{technologies}</Technologies>
      </InformationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: calc(50% - 150px);
  text-align: center;
  margin: 30px;
  height: 57rem;
  border: 1px solid #2e344e;
  padding: 45px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 95%;
  height: 25rem;
  border-radius: 3px;
`;
const Title = styled.h2`
  color: #fff;
  padding-top: 15px;
  font-weight: 400;
`;

const Description = styled.p`
  padding: 20px;
  color: #a4acc4;
  text-align: justify;
`;

const Technologies = styled.p`
  padding-top: 10px;
  color: #a4acc4;
`;

export default ProjectElement;
