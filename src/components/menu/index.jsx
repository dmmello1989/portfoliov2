import { useEffect, useState } from "react";
import * as S from "./styles";

export const Menu = () => {
  const [isSticking, setIsSticking] = useState(false);

  useEffect(() => {
    const primaryHeader = document.querySelector('.primary-header');
    const scrollWatcher = document.createElement('div');
    scrollWatcher.setAttribute('data-scroll-watcher', '');
    primaryHeader.before(scrollWatcher);

    const navObserver = new IntersectionObserver(([entry]) => {
      primaryHeader.classList.toggle('sticking', !entry.isIntersecting);
      setIsSticking(!entry.isIntersecting);
    })

    navObserver.observe(scrollWatcher);
  }, []);

  return (
    <>
      <S.Header isSticking={isSticking} className="primary-header">
        <S.Container>
          <S.Name>DANIEL <strong>MELLO</strong></S.Name>
          <S.Nav>
            <S.Link href="#section-projects" isSticking={isSticking}>Projects</S.Link>
            <S.Link href="#section-about" isSticking={isSticking}>About me</S.Link>
            <S.Link href="#section-contact" isSticking={isSticking}>Contact</S.Link>
          </S.Nav>
        </S.Container>
      </S.Header>
    </>
  )
}