import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

const petsSelector = (state: RootState) => state.petsReducer.pets;
const searchQuerySelector = (state: RootState) => state.petsReducer.searchQuery;
const currentPetSelector = (state: RootState) =>
  state.petsReducer.currentPet.name;

export const searchedFriendsSelector = createSelector(
  [petsSelector, searchQuerySelector, currentPetSelector],
  (pets, searchQuery, name) => {
    const searched = pets.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      searchedPets: searched.filter((p) => p.name !== name),
    };
  }
);
