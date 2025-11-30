export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung';
  salary: string;
  description: string;
  tags: string[];
  postedDate: string;
  isPromoted?: boolean;
}

export enum UserType {
  SEEKER = 'SEEKER',
  EMPLOYER = 'EMPLOYER',
  HOME = 'HOME'
}

export interface AIGeneratedJobContent {
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
}
