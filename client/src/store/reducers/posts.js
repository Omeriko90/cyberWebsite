import { REDUCER_LABEL as Labels } from "constant";

const posts = (state = [], action) => {
  switch (action.type) {
    case Labels.setProject:
      return setPosts(state, action.payload);
    default:
      return state;
  }
};

function setPosts(state, projects) {
  state = projects;
  return [...state];
}

export default posts;
