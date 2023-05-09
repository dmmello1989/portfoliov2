import styled from "styled-components";

export const Section = styled.section`
  background-color: #bbbbbb;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 32px;
`;

export const Box = styled.div`
  padding: 16px 80px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #000000;
`;

export const Title = styled.h3`
  margin: 32px 0 50px;
  font: 700 3rem "Open Sans";
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  
  & + & {
    margin: 16px 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
`;

export const TextWrapper = styled.div`
  --text: #ffffff;
  --font-size: 1.25rem;
  --duration: .44s;
  --duration-line: .84s;
  text-align: left;
  margin: 0;
  color: var(--text);
  font-size: var(--font-size);
  line-height: calc(var(--font-size) + 5px);

  .link {
    position: relative;
    text-decoration: none;
    color: inherit;

    div {
      overflow: hidden;

      &:first-child {
        display: flex;
        overflow: hidden;
        text-shadow: 0 var(--font-size) 0 var(--text);
      }

      &:last-child {
        position: absolute;
        pointer-events: none;
        right: 0;
        left: 0;
        bottom: -3px;
        height: 5px;
      }

      span {
        display: block;
        backface-visibility: hidden;
        font-style: normal;
        transition: transform var(--duration) ease;
        transform: translateY(var(--m, 0));

        ${() => {
          let styles = '';

          for (let i = 1; i < 50; i++) {
            styles += `
              &:nth-child(${i}) {
                transition-delay: ${i / 30}s;
              }
            `;
          }

          return styles;
        }}
      }
    }

    &:hover {
      --m: calc((var(--font-size) + 5px) * -1);
    }
  }
`;

export const ItemTitle = styled.span`
  font: 300 1rem "Open Sans";
`;

export const ItemText = styled.a`
  display: block;
  margin: 4px 0 0;
  font: 700 1.25rem "Open Sans";
  line-height: calc(1.25rem + 5px);
  cursor: pointer;
`;
