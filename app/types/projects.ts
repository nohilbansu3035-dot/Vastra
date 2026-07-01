interface ProjectFolder {
  title: string;
  url: string;
}

interface ProjectUrl {
  text: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  subtext: string;
  description?: string;
  images?: string[];
  folders?: ProjectFolder[];
  url?: string;
  urls?: ProjectUrl[];
}