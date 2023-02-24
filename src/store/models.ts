import { Group, Pet, PetOwner, Post } from "../shared/models";

export interface PetState {
  pets: Pet[];
  owners: PetOwner[];
  posts: Post[];
  groups: Group[];
  currentPet: Pet;
  searchQuery: string;
}
