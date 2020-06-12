import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "../actions/types";

const INITIAL_STATE = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
      };

    case ADD_LOG:
      return { ...state, logs: [...state.logs, payload], loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default logReducer;
