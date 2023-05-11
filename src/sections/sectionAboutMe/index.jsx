import * as S from "./styles";

import { useState, useRef, useEffect } from 'react';

export const SectionAboutMe = () => {
    const [active, setActive] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setActive(entry.isIntersecting);
      }, { threshold: 0.5 });
  
      observer.observe(ref.current);
  
      return () => {
        observer.unobserve(ref.current);
      };
    }, []);

    console.log({active})
  
  return (
    <S.Section>
      <S.Container>
        <S.TextBox ref={ref}>
          <S.Title active={active}>Work experience</S.Title>
          <S.Text active={active}>
            I am an experienced frontend developer proficient in React.js, Redux, Next.js and styled-components. I have four years of experience building and maintaining an online educational platform that helped thousands of users to achieve their goals, and developing landing pages that helped drive traffic and improve user engagement.
            <br/><br/>
            I am also skilled in version control with Git and deployment using AWS services like S3, Elastic Beanstalk, Cloudfront, Route 54, and Jenkins. 
            <br/><br/>
            I am a problem solver with attention to detail seeking to apply my knowledge of JavaScript, HTML, and CSS to create innovative solutions and engaging projects.
          </S.Text>
        </S.TextBox>
        <S.TextBox>
          <S.Title isSecond active={active}>Who is Daniel?</S.Title>
          <S.Text isSecond active={active}>
            I am an experienced frontend developer proficient in React.js, Redux, Next.js and styled-components. I have four years of experience building and maintaining an online educational platform that helped thousands of users to achieve their goals, and developing landing pages that helped drive traffic and improve user engagement.
            <br/><br/>
            I am also skilled in version control with Git and deployment using AWS services like S3, Elastic Beanstalk, Cloudfront, Route 54, and Jenkins. 
            <br/><br/>
            I am a problem solver with attention to detail seeking to apply my knowledge of JavaScript, HTML, and CSS to create innovative solutions and engaging projects.
          </S.Text>
        </S.TextBox>
      </S.Container>
      <S.BackgroundBlob />
    </S.Section>
  )
}