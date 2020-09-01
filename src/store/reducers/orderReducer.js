import { SET_ORDER } from "../actions/actionTypes";

const initialState = {
  all: [],
  single: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, all: action.order, recent: action.recent };
    case SET_SINGLE_NEWS:
      return { ...state, single: action.singleNews };
    case DELETE_NEWS:
      return {
        ...state,
        all: state.all.filter((news) => news._id !== action.id),
        recent: state.recent.filter((news) => news._id !== action.id),
      };
    default:
      return state;
  }
};
