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
  /* background-color: #000000; */
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
  text-align: left;
`;

export const ItemTitle = styled.span`
  font: 300 1rem "Open Sans";
`;

export const ItemText = styled.a`
  margin: 4px 0 0;
  font: 700 1.25rem "Open Sans";
  cursor: pointer;

  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;

  div {
    overflow: hidden;

    &:first-child {
      display: flex;
      overflow: hidden;
      text-shadow: 0 1rem 0 #2b3044;
    }

    &:last-child {
      position: absolute;
      pointer-events: none;
      right: 0;
      left: 0;
      bottom: -3px;
      height: 5px;

      svg {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 300%;
        height: 5px;
        fill: none;
        stroke: #275EFE;
        stroke-width: 1.5px;
        stroke-linecap: round;
        stroke-dasharray: 63.5px 128px;
        stroke-dashoffset: var(63.5px, 190.25px);
        transform: translateX(var(65.66%)) translateZ(0);
        transition: transform var(.84s, 0s), stroke-dashoffset var(.84s, 0s);
      }
    }

    span {
      display: block;
      backface-visibility: hidden;
      font-style: normal;
      transition: transform var(.44s) ease;
      transform: translateY(var(--m, 0));
      $i: 1;

      @while $i < 12 {
        &:nth-child(#{$i}) {
            transition-delay: $i / 20 + s;
        }
        $i: $i + 1;
      }
    }
  }

  &:hover {
    --m: calc(1rem * -1);
    --line-d: .44s;
    --line-x: 65.66%;
    --line-offset: 63.5px;
  }
`;