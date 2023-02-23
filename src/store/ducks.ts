import { PetState } from "./models";
import { petOwners, pets, posts } from "../fakeData/fakeData";
import { createSlice } from "@reduxjs/toolkit";


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
  reducers: {}
})

export default  petsSlice.reducer
