import { GET_PARAGRAPHS, SET_LOADING } from "../types";

const Reducer = (state, action) => {
  switch (action.type) {
    case GET_PARAGRAPHS:
      return {
        ...state,
        paragraphs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default Reducer;
