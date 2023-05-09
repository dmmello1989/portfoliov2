import styled, { keyframes } from "styled-components";

const digitar = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const digitarOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const bounceImgHover = keyframes`
  0% {
    transform: translateY(0);
    filter: grayscale(50%);
  }
  10% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-10px);
    filter: none;
  }
`;

const bounceImgOut = keyframes`
  0% {
    transform: translateY(-10px);
    filter: none;
  }
  100% {
    transform: translateY(0);
    filter: grayscale(50%);
  }
`;

export const Section = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  margin: 32px auto;
`;

export const BadgeImg = styled.img`
  display: block;
  width: 84px;
  margin-bottom: 8px;
  filter: grayscale(50%);
  animation: ${bounceImgOut} 0.3s ease-in-out;
`;

export const BadgeLabel = styled.span`
  flex-grow: 0;
  width: 0;
  font: 700 1rem "Open Sans";
  text-align: center;
  overflow: hidden;
  animation: ${digitarOut} 0.3s steps(20, end) forwards;
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover ${BadgeLabel} {
    animation: ${digitar} 0.3s steps(20, end) forwards;
  }

  &:hover ${BadgeImg} {
    animation: ${bounceImgHover} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
`;