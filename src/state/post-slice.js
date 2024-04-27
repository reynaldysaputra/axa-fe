import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPosts: [],
  isOpenFormPost: false,
  isEditFormPost: false,
  stateFormPost: {
    id: "",
    title: "",
    body: "",
  },
};

export const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialStatePosts: (state, data) => {
      state.userPosts = data.payload;
    },
    updateStateFormPost: (state, data) => {
      state.stateFormPost.id = data.payload.id;
      state.stateFormPost.title = data.payload.title;
      state.stateFormPost.body = data.payload.body;
    },
    addNewPost: (state, data) => {
      state.userPosts.unshift({
        userId: data.payload.userId,
        id: Math.random(),
        title: data.payload.title,
        body: data.payload.body,
      });

      state.isOpenFormPost = false;
      state.isEditFormPost = false;
    },
    editPost: (state, data) => {
      const newPostUpdate = state.userPosts.filter((post) => {
        if (post.id === data.payload.id) {
          post.title = data.payload.title;
          post.body = data.payload.body;
        }

        return post;
      });

      state.userPosts = newPostUpdate;
      state.isOpenFormPost = false;
      state.isEditFormPost = false;
      state.stateFormPost.title = "";
      state.stateFormPost.body = "";
    },
    deletePost: (state, data) => {
      state.userPosts = state.userPosts.filter(
        (post) => post.id !== data.payload.id
      );
      state.isOpenFormPost = false;
      state.isEditFormPost = false;
    },
    openFormPost: (state, data) => {
      state.isOpenFormPost = data.payload;
    },
    editFormPost: (state, data) => {
      state.isEditFormPost = data.payload;
    },
  },
});

export const {
  initialStatePosts,
  addNewPost,
  editPost,
  deletePost,
  openFormPost,
  editFormPost,
  updateStateFormPost,
} = postsSlice.actions;

export default postsSlice.reducer;
