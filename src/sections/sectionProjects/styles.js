import styled from "styled-components";

export const Section = styled.section`
  
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
`;

export const HalfSection = styled.div`
  width: calc(50% - 64px);
`;

export const ItemTitle = styled.h3`
  
`;

export const ItemText = styled.p`
  
`;

export const ItemStack = styled.span`
  
`;