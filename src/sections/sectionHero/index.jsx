import ProfileImg from "../../assets/bw-profile-circle.png";
import * as S from "./styles"

export const SectionHero = () => {
  return (
    <S.Section>
      <S.Container>
        <S.ImageWrapper>
          <S.ProfileImage src={ProfileImg} alt="Daniel Mello" />
          <S.ImageFilter />
        </S.ImageWrapper>
        <S.Column>
          <S.Name>
            DANIEL<br/>
            <strong>MELLO</strong>
          </S.Name>
          <S.Title>FRONTEND DEVELOPER</S.Title>
        </S.Column>
      </S.Container>
    </S.Section>
  )
}