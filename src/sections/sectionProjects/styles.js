import styled from "styled-components";

export const Section = styled.section`
  padding: 32px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 80px auto;

  ${props => props.isReverse && `
    flex-direction: row-reverse;
  `};

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const HalfSection = styled.div`
  width: calc(50% - 64px);

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: #2c1a16;
  font: 700 1.5rem "Open Sans";
`;

export const ItemText = styled.p`
  font: 300 1.125rem "Open Sans";
  line-height: 26px;
`;

export const ItemStack = styled.span`
  font: 300 0.875rem "Bitter";
`;

export const Link = styled.a`
  position: relative;
  display: block;
  width: fit-content;
  margin: 32px 0 0;
  padding: 8px 16px;
  cursor: pointer;
  color: #2c1a16;
  border: 1px solid #2c1a16;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: #ffffff;
  }

  &:hover::before {
    transform: translate(-5%, 0) skew(-15deg);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 130%;
    height: 32px;
    background-color: #2c1a16;
    transform: translate(-110%, 0) skew(-30deg);
    transition: 0.5s;
    z-index: -1;
  }
`;