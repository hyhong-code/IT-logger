import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const resp = await fetch("/techs");
    const data = await resp.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    console.error(error.response.data);
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const addTechs = (tech) => async (dispatch) => {
  try {
    setLoading();
    const resp = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    console.error(error.response.data);
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
