import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: calc(100vh - 65px);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-right: 64px;

  @media (max-width: 1023px) {
    margin: 0 0 32px;
  }
`;

export const ProfileImage = styled.img`
  width: 420px;
  display: block;

  @media (max-width: 1023px) {
    width: 318px;
  }
`;

export const ImageFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #2c1a16;
  mix-blend-mode: multiply;
  opacity: 0.5;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font: 300 6rem "Open Sans";
  line-height: 5rem;

  > strong {
    font-weight: 800;
  }

  @media (max-width: 1023px) {
    font: 300 3rem "Open Sans";
    line-height: 2rem;

    > br {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  padding: 8px 16px;
  color: #ffffff;
  font: 700 2rem "Open Sans";
  background-color: #2c1a16;
  
  @media (max-width: 1023px) {
    font: 700 1.75rem "Open Sans";
  }
`;