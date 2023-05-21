import styled, { keyframes } from "styled-components";
import * as pallette from "../../styledVariables";

const slideBg = keyframes`
  0% {
    right: 0%;
  }
  100% {
    right: 50%;
  }
`;

export const Section = styled.section`
  position: relative;
  min-height: 300px;
  margin: 32px 0;
  padding: 72px 0 32px;
  overflow: hidden;
`;

export const SecondaryBackground = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  /* background-image: -webkit-linear-gradient(360deg, ${pallette.colorEclipse} 50%, ${pallette.colorLight} 50%); */
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: ${pallette.colorEclipse};
    /* animation: ${slideBg} 5s linear; */
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  padding: 0 64px 0 0;
  color: ${pallette.colorLight};

  & + & {
    padding: 0 0 0 64px;
    color: ${pallette.colorEclipse};
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 12px 0 32px;
  margin-bottom: 32px;
  opacity: 0;
  transform: translateX(-150%);
  transition: opacity 0.5s ease-in-out, transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${props => props.isSecond && `
    transform: translateX(150%);
  `};

  ${props => props.active && `
    opacity: 1;
    transform: translateX(0);
  `};
`;

export const Text = styled.p`
  text-align: justify;
  font: 300 1.125rem Bitter;
  line-height: 28px;
  opacity: 0;
  transform: translateX(-150%);
  transition: opacity 0.5s ease-in-out, transform 0.75s cubic-bezier(0.22, 0.61, 0.36, 1);
  
  ${props => props.isSecond && `
    transform: translateX(150%);
  `};

  ${props => props.active && `
    opacity: 1;
    transform: translateX(0);
  `};
`;