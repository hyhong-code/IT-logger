import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  techs: null,
  loading: false,
  error: null,
};

const techReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_TECHS:
      return { ...state, techs: payload, loading: false };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== payload),
        loading: false,
      };
    case TECHS_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default techReducer;
