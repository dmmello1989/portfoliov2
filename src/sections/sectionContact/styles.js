import styled from "styled-components";

export const Section = styled.section`
  background-color: #bbbbbb;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 64px 0;
`;

export const Title = styled.h3`
  font: 700 1.25rem "Open Sans";
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  
`;

export const ItemText = styled.p`
  &:not(strong) {
    text-decoration: underline;
  }
`;