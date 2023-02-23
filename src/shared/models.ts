export interface Pet {
  id: number;
  description:string;
  type: "cat" | "dog" | "bird";
  name: string;
  image: string;
  friendsId?: number[];
}

export interface PetOwner {
  id: number;
  name: string;
  image: string;
  petsId:number[];
}

export interface Post {
  id:number;
  image: string;
  description?:string;
  likes?: number;
  diLikes?: number;
  date: string;
  comments?: string[];
}
export interface Comment {
  id:number;
  author:Pet;
  title: string;
}

export interface Group {
  members: Pet[];
}
