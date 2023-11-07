import { User } from "./user";

export interface Post {
  id: string;
  author: User;
  image: string;
  caption: string;
  created_at: string;
}
