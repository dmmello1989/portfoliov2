import * as S from "./styles";

export const Menu = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Name>DANIEL <strong>MELLO</strong></S.Name>
        <S.Nav>
          <S.Link href="#section-projects">Projects</S.Link>
          <S.Link href="#section-about">About me</S.Link>
          <S.Link href="#section-contact">Contact</S.Link>
        </S.Nav>
      </S.Container>
    </S.Header>
  )
}