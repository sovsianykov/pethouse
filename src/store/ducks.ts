import { PetState } from "./models";
import { petOwners, pets, posts } from "../fakeData/fakeData";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../shared/models";


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
    },
    addLikes: (state, action:PayloadAction<number>) =>{
      state.posts[action.payload].likes! +=1
    },
    addDisLikes: (state, action:PayloadAction<number>) =>{
      state.posts[action.payload].diLikes! += 1
    },
    addComment: (state, action:PayloadAction<Comment>) =>{
      console.log(action.payload);
    state.posts[action.payload.postId].comments =  current(state).posts[action.payload.postId].comments!.concat(action.payload)
      console.log(current(state).posts);
    },
  }
})

export default  petsSlice.reducer
export const { setCurrentPet, setSearchQuery,addDisLikes, addLikes , addComment } = petsSlice.actions
