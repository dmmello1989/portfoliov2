import { useEffect } from "react";
import EmailImg from "../../assets/email.png"
import LinkedinImg from "../../assets/linkedin.png"
import TelephoneImg from "../../assets/telephone.png"
import * as S from "./styles";

const contactObj = [
  {
    icon: EmailImg,
    label: "E-MAIL",
    value: "dmmello1989@gmail.com",
    link: "mailto:dmmello1989@gmail.com"
  },
  {
    icon: TelephoneImg,
    label: "TELEPHONE",
    value: "+55 (48) 9 9916-1422",
    link: "https://wa.me/5548999161422"
  },
  {
    icon: LinkedinImg,
    label: "LINKEDIN",
    value: "dmmello1989",
    link: "https://www.linkedin.com/in/dmmello1989"
  },
]

export const SectionContact = () => {
  const handleClick = link => {
    return window.open(link);
  }

  useEffect(() => {
    document.querySelectorAll('.link').forEach(link => {
      link.innerHTML = '<div><span>' + link.textContent.trim().split('').join('</span><span>') + '</span></div>'
      link.querySelectorAll('span').forEach(s => s.innerHTML = s.textContent == ' ' ? '&nbsp;' : s.textContent)
      link.insertAdjacentHTML('beforeend', '<div><svg preserveAspectRatio="none" viewBox="0 0 192 5"><path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" /></svg></div>')
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll(".link").forEach((link) => {
      link.innerHTML =
        "<div><span>" +
        link.textContent.trim().split("").join("</span><span>") +
        "</span></div>";
      link.querySelectorAll("span").forEach((s) => {
        s.innerHTML = s.textContent == " " ? "&nbsp;" : s.textContent;
      });
      link.insertAdjacentHTML(
        "beforeend",
        '<div><svg preserveAspectRatio="none" viewBox="0 0 192 5"><path d="M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923" /></svg></div>'
      );
    });
  }, []);

  return (
    <S.Section>
      <S.Container>
        <S.Box>
          <S.Title>
            Contact
          </S.Title>

          <S.List>
            {contactObj.map(contact => (
              <S.Item key={contact.label}>
                <S.IconWrapper onClick={() => handleClick(contact.link)}>
                  <S.Icon src={contact.icon} alt={contact.label} />
                </S.IconWrapper>
                <S.TextWrapper>
                  <S.ItemTitle>{contact.label}</S.ItemTitle>
                  <S.ItemText className="link" onClick={() => handleClick(contact.link)}>
                    {contact.value}
                  </S.ItemText>
                </S.TextWrapper>
              </S.Item>
            ))}
          </S.List>
        </S.Box>
      </S.Container>
    </S.Section>
  )
}