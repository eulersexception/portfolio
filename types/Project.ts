export interface Project {
  name: string;
  description: string;
  links: ProjectLink[];
}

export interface ProjectLink {
  text: string;
  href: string;
}
