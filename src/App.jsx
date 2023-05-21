import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu } from "./components/menu"
import { SectionHero } from "./sections/sectionHero"
import { SectionBadges } from "./sections/sectionBadges"
import { SectionProjects } from "./sections/sectionProjects"
import { SectionAboutMe } from "./sections/sectionAboutMe"
import { SectionContact } from "./sections/sectionContact"

function App() {
  useEffect(() => {
    AOS.init({
      startEvent: 'load'
    });
  }, []);

  return (
    <>
      <Menu />
      <SectionHero />
      <SectionBadges />
      <SectionProjects />
      <SectionAboutMe />
      <SectionContact />
    </>
  )
}

export default App
