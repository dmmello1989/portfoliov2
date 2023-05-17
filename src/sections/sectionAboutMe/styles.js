import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: 300px;
  margin: 32px 0;
  padding: 72px 0 32px;
  overflow: hidden;
`;

export const BackgroundBlob = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-image: -webkit-linear-gradient(50deg, #bbbbbb 50%, #ffffff 50%);
  z-index: -1;

  &::before {
    content: "";
    width: 50%;
    min-height: 100%;
    border-radius: 0 0 30px 0;
    background-color: #ffffff;
  }

  &::after {
    content: "";
    width: 50%;
    min-height: 100%;
    border-radius: 30px 0 0 0;
    background-color: #bbbbbb;
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

  & + & {
    padding: 0 0 0 64px;
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