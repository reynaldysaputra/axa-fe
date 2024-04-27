import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userComments: [],
  isOpenFormComment: false,  
  isEditFormComment: false
}

export const commentSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNewComment: (state, data) => {
      state.isOpenFormComment = false;
      state.isEditFormComment = false;
    },
    editComment: (state, data) => {
      state.isOpenFormComment = false;
      state.isEditFormComment = false;
    },
    deleteComment: (state, data) => {
      state.isOpenFormComment = false;
      state.isEditFormComment = false;
    },
    openFormComment: (state, data) => {
      state.isOpenFormComment = data.payload;
    },
    editFormComment: (state, data) => {
      state.isEditFormComment = data.payload;
    }
  },
})

export const { addNewComment, editComment, deleteComment,  openFormComment, editFormComment } = commentSlice.actions

export default commentSlice.reducer