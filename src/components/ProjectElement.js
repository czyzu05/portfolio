import React from "react";
import styled from "styled-components";

const ProjectElement = ({ title, description, technologies, img, link }) => {
  return (
    <Wrapper>
      <InformationContainer>
        <Image src={img} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>Used Technologies</Title>
        <Technologies>{technologies}</Technologies>
        {link ? (
        <Link href={link} target="_blank">Link</Link>
        ) : (
          <>
            <Title style={{paddingTop: "18px"}}>Private Client Project</Title>
            <Description>This project is confidential and I cannot provide a public link or display screenshots. For more details about my work, please contact me directly.</Description>
          </>
        )}
      </InformationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: calc(50% - 90px);
  text-align: center;
  margin: 30px;
  height: 60rem;
  border: 1px solid #2e344e;
  padding: 25px;

  @media screen and (max-width: 1600px) {
    padding: 25px;
    flex-basis: calc(53% - 100px);
    height: 75rem;
  }

  @media screen and (max-width: 1400px) {
    padding: 25px;
    flex-basis: calc(53% - 100px);
    height: 75rem;
  }
  @media screen and (max-width: 895px) {
    padding: 25px;
    margin: 15px auto;
    flex-basis: calc(77% - 100px);
  }
  @media screen and (max-width: 770px) {
    padding: 35px;
    flex-basis: 80%;
  }
  @media screen and (max-width: 603px) {
    padding: 25px;
    flex-basis: 90%;
    height: 70rem;
  }
  @media screen and (max-width: 450px) {
    padding: 15px;
    flex-basis: 100%;
    height: 65rem;
  }
  @media screen and (max-width: 360px) {
    height: 50rem;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 70%;
  height: 18rem;
  border-radius: 3px;
  margin-bottom: 20px;

  @media screen and (max-width: 1300px) {
    width: 90%;
    height: 20rem;
  }

  @media screen and (max-width: 890px) {
    width: 77%;
  }
  @media screen and (max-width: 605px) {
    height: 16.5rem;
  }
  @media screen and (max-width: 400px) {
    height: 15rem;
  }
  @media screen and (max-width: 365px) {
    height: 10rem;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 400;
  letter-spacing: 0.6px;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  padding: 20px;
  color: #a4acc4;
  text-align: justify;
  line-height: 1.4;

  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 1.3rem;
  }
`;

const Technologies = styled.p`
  padding-top: 10px;
  color: #a4acc4;
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 365px) {
    font-size: 1.3rem;
  }
`;

const Link = styled.a`
text-decoration: none;
color: #037FFF;
padding-top: 26px;
font-size: 20px;

&:hover {
  cursor: pointer;
  color: #046ad4;
}
`

export default ProjectElement;
