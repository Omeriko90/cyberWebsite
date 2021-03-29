import { REDUCER_LABEL as Labels } from "constant";

const user = (state = {}, action) => {
  switch (action.type) {
    case Labels.setUser:
      return setUser(state, action.payload);
    default:
      return state;
  }
};

function setUser(state, user) {
  state = user;

  return { ...state };
}

export default user;
