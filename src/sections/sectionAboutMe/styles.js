import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: calc(100vh - 128px);
  padding: 16px 0;
`;

export const BackgroundBlob = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-image: -webkit-linear-gradient(50deg, #bbbbbb 50%, #ffffff 50%);

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
`;

export const TextBox = styled.div`
  padding: 32px;
`;

export const Text = styled.p`
`;