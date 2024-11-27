import { IMAbout } from "./about";
import { IMButtons } from "./buttons";
import { IMNavigation } from "./navigation";
import { IMProjects } from "./projects";
import { IMSkills } from "./skills";

interface IMHome {
  title: string;
  description: string;
  navtitle: string;
}

interface Pages {
  home: IMHome;
  projects: IMProjects;
  skills: IMSkills;
  about: IMAbout;
}

export interface IMLanguage {
  pages: Pages;
  buttons: IMButtons;
  navigation: IMNavigation;
}
