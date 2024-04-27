import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userComments: [],
  isOpenFormComment: false,
  isEditFormComment: false,
  stateFormComment: {
    id: "",
    name: "",
    email: "",
    body: "",
  },
};

export const commentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialStateComment: (state, data) => {
      state.userComments = data.payload;
    },
    updateStateFormComment: (state, data) => {
      state.stateFormComment.id = data.payload.id;
      state.stateFormComment.name = data.payload.name;
      state.stateFormComment.email = data.payload.email;
      state.stateFormComment.body = data.payload.body;
    },
    addNewComment: (state, data) => {
      state.userComments.unshift({
        userId: data.payload.userId,
        id: Math.random(),
        email: data.payload.email,
        name: data.payload.name,
        body: data.payload.body,
      });

      state.isOpenFormComment = false;
      state.isEditFormComment = false;
    },
    editComment: (state, data) => {
      const newComment = state.userComments.filter((comment) => {
        if (comment.id === data.payload.id) {
          comment.email = data.payload.email;
          comment.name = data.payload.name;
          comment.body = data.payload.body;
        }

        return comment;
      });

      state.userComments = newComment;
      state.isOpenFormComment = false;
      state.isEditFormComment = false;
    },
    deleteComment: (state, data) => {
      state.userComments = state.userComments.filter(
        (comment) => comment.id !== data.payload.id
      );
      state.isOpenFormComment = false;
      state.isEditFormComment = false;
    },
    openFormComment: (state, data) => {
      state.isOpenFormComment = data.payload;
    },
    editFormComment: (state, data) => {
      state.isEditFormComment = data.payload;
    },
  },
});

export const {
  initialStateComment,
  updateStateFormComment,
  addNewComment,
  editComment,
  deleteComment,
  openFormComment,
  editFormComment,
} = commentSlice.actions;

export default commentSlice.reducer;
