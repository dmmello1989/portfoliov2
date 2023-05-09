import { Menu } from "./components/menu"
import { SectionAboutMe } from "./sections/sectionAboutMe"
import { SectionBadges } from "./sections/sectionBadges"
import { SectionContact } from "./sections/sectionContact"
import { SectionHero } from "./sections/sectionHero"
import { SectionProjects } from "./sections/sectionProjects"

function App() {
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
