import * as S from "./styles";

export const Menu = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Name>DANIEL <strong>MELLO</strong></S.Name>
        <S.Nav>
          <S.Link>About me</S.Link>
          <S.Link>Projects</S.Link>
          <S.Link>Contact</S.Link>
        </S.Nav>
      </S.Container>
    </S.Header>
  )
}