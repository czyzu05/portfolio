import React from "react";
import { skillsData } from "../data/skillsData";
import styled from "styled-components";
import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import SkillElement from "../components/SkillElement";
import Timeline from "../components/Timeline";
import Certificates from "../components/Certificates";

const Resume = () => {
  const skills = skillsData.map((skill) => (
    <SkillElement key={skill.title} {...skill} />
  ));

  return (
    <Container>
      <SectionContainer>
        <Title>My skills</Title>
        <SkillsSection>{skills}</SkillsSection>
        <Title>Education</Title>
        <TimelineContainer>
          <Timeline />
        </TimelineContainer>
        <Title>Certificates</Title>
        <Certificates />
      </SectionContainer>
    </Container>
  );
};

const SkillsSection = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 10rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 860px) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 5rem;
    margin-top: 30px;
  }
  @media screen and (max-width: 350px) {
    margin-bottom: 5rem;
    margin-top: 0px;
  }
`;

const TimelineContainer = styled.div`
@media screen and (max-width: 600px) {
  margin-top: -50px;
}
  @media screen and (max-width: 400px) {
    margin-top: -100px;
  }
`;

export default Resume;
