export type SceneState = 'arrival' | 'door_transition' | 'house_explore';

export type RoomId = 
  | 'living_room'
  | 'tech_room'
  | 'laboratory'
  | 'library'
  | 'trophy_room'
  | 'office'
  | 'research_lab'
  | 'secret_room'
  | 'exit_room';

export interface RoomMeta {
  id: RoomId;
  number: string;
  name: string;
  subtitle: string;
  iconName: string;
  themeColor: string;
  accentBg: string;
  atmosphere: 'warm_ambient' | 'cyan_tech' | 'amber_lab' | 'emerald_study' | 'gold_gallery' | 'slate_office' | 'violet_research' | 'mystic_secret' | 'rose_exit';
  description: string;
  locationLabel: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  type: string;
  featured?: boolean;
  liveUrl: string;
  githubUrl?: string;
  tech: string[];
  fullDescription: string[];
  highlights: string[];
  architectureDiagram?: string[];
  badge: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  type: string;
  featured: boolean;
  liveUrl: string;
  githubUrl?: string;
  techStack: string[];
  description: string[];
  keyHighlights: string[];
  architectureDiagram?: string[];
  badge: string;
}

export interface EducationItem {
  id: string;
  exam: string;
  grade: string;
  institution: string;
  description?: string;
  status?: string;
  isCurrent?: boolean;
  yearHint?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    levelHint?: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  institution: string;
  grade: string;
  badge: string;
  category: 'academic' | 'university' | 'milestone';
  note: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Part-time' | 'Team Project' | 'Research Assistant' | 'Academic Lead';
  period: string;
  isPlaceholder?: boolean;
  description: string[];
  technologies: string[];
}

export interface ResearchTopic {
  id: string;
  title: string;
  focus: string;
  description: string;
  tags: string[];
  icon: string;
}
