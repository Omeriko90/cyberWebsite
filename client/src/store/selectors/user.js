import { createSelector } from "reselect";

const getUser = (state) => state.user;

export const selectUser = createSelector(getUser, (user) => user);
