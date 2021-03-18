import React from "react";
import { projectsData } from "../data/projectsData";
import styled from "styled-components";
import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import ProjectElement from "../components/ProjectElement";

const Projects = () => {
  const projects = projectsData.map((project) => (
    <ProjectElement key={project.title} {...project} />
  ));

  return (
    <Container>
      <SectionContainer>
        <Title>Projects</Title>
        <MainSection>{projects}</MainSection>
      </SectionContainer>
    </Container>
  );
};

const MainSection = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 840px) {
    justify-content: center;
  }
  @media screen and (max-width: 540px) {
    margin-top: 0px;
  }
`;
export default Projects;
