import HTMLBadge from "../../assets/badges/html-badge.png";
import CSSBadge from "../../assets/badges/css-badge.png";
import SASSBadge from "../../assets/badges/sass-badge.png";
import JavaScriptBadge from "../../assets/badges/javascript-badge.png";
import TypeScriptBadge from "../../assets/badges/typescript-badge.png";
import ReactBadge from "../../assets/badges/react-badge.png";
import ReduxBadge from "../../assets/badges/redux-badge.png";
import NextBadge from "../../assets/badges/next-badge.png";

import * as S from "./styles";

export const SectionBadges = () => {
  const badges = [
    {
      img: HTMLBadge,
      label: "HTML"
    },
    {
      img: CSSBadge,
      label: "CSS"
    },
    {
      img: SASSBadge,
      label: "SASS"
    },
    {
      img: JavaScriptBadge,
      label: "JavaScript"
    },
    {
      img: TypeScriptBadge,
      label: "TypeScript"
    },
    {
      img: ReactBadge,
      label: "React.js"
    },
    {
      img: ReduxBadge,
      label: "Redux"
    },
    {
      img: NextBadge,
      label: "Next.js"
    },
  ]

  return (
    <S.Section>
      <S.Container>
        {badges.map((badge, index) => (
          <S.Badge key={index}>
            <S.BadgeImg src={badge.img} alt={badge.label} />
            <S.BadgeLabel>{badge.label}</S.BadgeLabel>
          </S.Badge>
        ))}
      </S.Container>
    </S.Section>
  )
}