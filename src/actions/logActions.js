import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const resp = await fetch("/logs");
    const data = await resp.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    console.error(error.response.data);
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const addLog = (formData) => async (dispatch) => {
  try {
    setLoading();
    const resp = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    console.error(error.response.data);
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};
