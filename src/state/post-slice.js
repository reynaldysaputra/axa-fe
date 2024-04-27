import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userPosts: [],
  isOpenFormPost: false,  
  isEditFormPost: false
}

export const postsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNewPost: (state, data) => {
      state.isOpenFormPost = false;
      state.isEditFormPost = false;
    },
    editPost: (state, data) => {
      state.isOpenFormPost = false;
      state.isEditFormPost = false;
    },
    deletePost: (state, data) => {
      state.isOpenFormPost = false;
      state.isEditFormPost = false;
    },
    openFormPost: (state, data) => {
      state.isOpenFormPost = data.payload;
    },
    editFormPost: (state, data) => {
      state.isEditFormPost = data.payload;
    }
  },
})

export const { addNewPost, editPost, deletePost,  openFormPost, editFormPost } = postsSlice.actions

export default postsSlice.reducer