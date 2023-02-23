import { PetState } from "./models";
import { petOwners, pets, posts } from "../fakeData/fakeData";
import { createSlice, current } from "@reduxjs/toolkit";


const initialState: PetState = {
  pets: pets,
  posts: posts,
  owners: petOwners,
  groups:[],
  currentPet: pets[1]
}

const petsSlice = createSlice({
  name:'pets',
  initialState,
  reducers: {
    setCurrentPet: (state,action) =>{
      state.currentPet = current(state).pets.find(p => p.id === action.payload)!
    }
  }
})

export default  petsSlice.reducer
export const { setCurrentPet } = petsSlice.actions
