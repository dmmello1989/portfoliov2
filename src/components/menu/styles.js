import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 16px 8px; 
  margin: 0 auto;
`;

export const Name = styled.button`
  font: 300 1.5rem "Open Sans";
  padding: 0;
  border: none;
  background-color: transparent;

  > strong {
    font-weight: 700;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a`
  position: relative;
  margin: 0 8px;
  padding: 8px 16px;
  cursor: pointer;
  color: #2c1a16;
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