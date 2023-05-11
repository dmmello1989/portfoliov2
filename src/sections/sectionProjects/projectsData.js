import EcoletaDesktopCrop from "../../assets/projects/ecoleta/details-webcrop.png";
import EcoletaDesktop from "../../assets/projects/ecoleta/details-web.png";
import EcoletaMobile from "../../assets/projects/ecoleta/details-mobile.png";
import EcoletaHomeDesktop from "../../assets/projects/ecoleta/home-web.png";
import EcoletaHomeMobile from "../../assets/projects/ecoleta/home-mobile.png";

import SpotcodeDashboard from "../../assets/projects/spotcode/dashboard.png"
import SpotcodeSearch from "../../assets/projects/spotcode/search.png"
import SpotcodeCategory from "../../assets/projects/spotcode/category.png"
import SpotcodeAlbum from "../../assets/projects/spotcode/album.png"
import SpotcodeFavorites from "../../assets/projects/spotcode/favorites.png"

import BTHLogin from "../../assets/projects/beTheHero/login.png"
import BTHList from "../../assets/projects/beTheHero/list.png"
import BTHRegister from "../../assets/projects/beTheHero/register.png"
import BTHSplash from "../../assets/projects/beTheHero/splash.png"
import BTHRegisterCase from "../../assets/projects/beTheHero/register-case.png"

import HuddleDesktop from "../../assets/projects/frontend-mentor/huddle-landing-page/huddle-desktop.png";
import HuddleMobile from "../../assets/projects/frontend-mentor/huddle-landing-page/huddle-mobile.png";

import ComingSoonDesktop from "../../assets/projects/frontend-mentor/lp-coming-soon/landing-desktop.png";
import ComingSoonMobile from "../../assets/projects/frontend-mentor/lp-coming-soon/landing-mobile.png";

import GCGHard from "../../assets/projects/great-color-game/hard.png";
import GCGEasy from "../../assets/projects/great-color-game/easy.png";
import GCGRight from "../../assets/projects/great-color-game/right.png";
import GCGWrong from "../../assets/projects/great-color-game/wrong.png";

export const projectsData = [
  {
    itemTitle: "Ecoleta",
    itemText: "Ecoleta brings together companies and entities that collect all sorts of recyclable waste and people who need to dispose of their waste in an ecological way.",
    itemStack: "Node.js | Expo | React.js | React Native | TypeScript",
    itemPhotos: [
      EcoletaHomeDesktop,
      EcoletaDesktopCrop,
      EcoletaDesktop,
      EcoletaHomeMobile,
      EcoletaMobile
    ]
  },
  {
    itemTitle: "SpotCode",
    itemText: "A simplistic clone of Spotify, this is a fullstack project made with Ruby and Rails on the backend and React with Bulma for the frontend.",
    itemStack: "Ruby on Rails | SQLite3 | React.js | Bulma | styled-components",
    itemPhotos: [
      SpotcodeDashboard,
      SpotcodeSearch,
      SpotcodeCategory,
      SpotcodeAlbum,
      SpotcodeFavorites
    ]
  },
  {
    itemTitle: "Be The Hero",
    itemText: "This is a crowdfunding app with basic CRUD functionalities, a fullstack project with handfuls of JavaScript and its libraries.",
    itemStack: "React.js | React Native | Expo | Node.js | Express | SQLite3",
    itemPhotos: [
      BTHLogin,
      BTHList,
      BTHRegister,
      BTHSplash,
      BTHRegisterCase
    ]
  },
  {
    itemTitle: "Huddle - Landing Page",
    itemText: "A simple, modern and responsive landing page. Challenge from Frontend Masters",
    itemStack: "HTML | CSS",
    itemPhotos: [
      HuddleDesktop,
      HuddleMobile,
    ]
  },
  {
    itemTitle: "Base Apparel - Landing Page",
    itemText: "A simple and responsive landing page with e-mail validation. Challenge from Frontend Masters",
    itemStack: "HTML | CSS | JavaScript",
    itemPhotos: [
      ComingSoonDesktop,
      ComingSoonMobile,
    ]
  },
  {
    itemTitle: "Great Color Game",
    itemText: "Try your rgb color code knowledge with this fun game made in with JavaScript",
    itemStack: "HTML | CSS | JavaScript",
    itemPhotos: [
      GCGHard,
      GCGEasy,
      GCGRight,
      GCGWrong
    ]
  },
]