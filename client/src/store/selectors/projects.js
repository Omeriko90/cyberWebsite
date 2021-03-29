import { createSelector } from "reselect";

const getPosts = (state) => state.posts;

export const selectPosts = createSelector(getPosts, (posts) => posts);
