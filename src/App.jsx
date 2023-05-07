import { Menu } from "./components/menu"
import { SectionAboutMe } from "./sections/sectionAboutMe"
import { SectionBadges } from "./sections/sectionBadges"
import { SectionContact } from "./sections/sectionContact"
import { SectionHero } from "./sections/sectionHero"

function App() {
  return (
    <>
      <Menu />
      <SectionHero />
      <SectionBadges />
      <SectionAboutMe />
      <SectionContact />
    </>
  )
}

export default App
