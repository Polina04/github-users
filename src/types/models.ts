export interface User {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  url: string;
}

export interface UserDetailed extends User {
  bio: null | string;
  blog: null | string;
  company: null | string;
  created_at: string;
  email: null | string;
  name: string | null;
  followers: number;
  following: number;
  location: null | string;
}
