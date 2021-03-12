import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
      <TextBelowHeader>{children}</TextBelowHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 10rem;
`;

const Header = styled.h2`
  color: #fff;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 400;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 63%;
    bottom: 0;
    height: 5px;
    border-radius: 100px;
    width: 100px;
    background: rgba(3, 127, 255, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 63%;
    bottom: 0;
    height: 5px;
    border-radius: 100px;
    width: 35px;
    background: #037fff;
  }

  @media screen and (max-width: 601px) {
    font-size: 3rem;

    &::before {
      top: 50%;
    }
    &::after {
      top: 50%;
    }
  }
  @media screen and (max-width: 451px) {
    font-size: 2.3rem;

    &::before {
      top: 40%;
    }
    &::after {
      top: 40%;
    }
  }
  @media screen and (max-width: 321px) {
    font-size: 2rem;

    &::before {
      top: 32%;
      width: 70px;
    }
    &::after {
      top: 32%;
      width: 20px;
    }
  }
`;

const TextBelowHeader = styled.span`
  position: absolute;
  left: 0;
  top: 33%;
  font-size: 9rem;
  line-height: 1;
  font-weight: 900;
  color: rgba(25, 29, 43, 0.44);
  display: inline-block;
  text-transform: uppercase;
  z-index: -1;

  @media screen and (max-width: 891px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 5.3rem;
  }
  @media screen and (max-width: 451px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 2.3rem;
  }
`;

export default Title;
