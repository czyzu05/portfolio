import React from "react";
import { skillsData } from "../data/skillsData";
import styled from "styled-components";
import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import SkillElement from "../components/SkillElement";
import Timeline from "../components/Timeline";

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
        <Timeline />
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
`;

export default Resume;
