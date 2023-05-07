import * as S from "./styles";

export const SectionContact = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Title>
          Feel free to contact me at any of the channels below
        </S.Title>

        <S.List>
          <S.Item>
            <S.ItemText><strong>LinkedIn: </strong> dmmello1989</S.ItemText>
            <S.ItemText><strong>Phone: </strong> +55 48 9 9916-1422</S.ItemText>
            <S.ItemText><strong>E-mail: </strong> dmmello1989@gmail.com</S.ItemText>
          </S.Item>
        </S.List>
      </S.Container>
    </S.Section>
  )
}