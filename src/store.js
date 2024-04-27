import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./state/comment-slice";
import postSlice from "./state/post-slice";

export const store = configureStore({
  reducer: {
    post: postSlice,
    comment: commentSlice,
  },
});
