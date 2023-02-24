import { PetState } from "./models";
import { petOwners, pets, posts } from "../fakeData/fakeData";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";


const initialState: PetState = {
  pets: pets,
  posts: posts,
  owners: petOwners,
  groups:[],
  currentPet: pets[0],
  searchQuery:"",
}

const petsSlice = createSlice({
  name:'pets',
  initialState,
  reducers: {
    setCurrentPet: (state,action:PayloadAction<number>) =>{
      state.currentPet = current(state).pets.find(p => p.id === action.payload)!
    },
    setSearchQuery: (state, action:PayloadAction<string>) => {
      state.searchQuery = action.payload
    }
  }
})

export default  petsSlice.reducer
export const { setCurrentPet, setSearchQuery } = petsSlice.actions
