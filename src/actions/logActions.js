import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

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

export const deleteLog = (id) => async (dispatch) => {
  try {
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    console.error(error.response.data);
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setCurrent = (log) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: log,
  });
};

export const clearCurrent = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const updateLog = (log) => async (dispatch) => {
  try {
    const resp = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();
    dispatch({
      type: UPDATE_LOG,
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

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const resp = await fetch(`/logs/?q=${text}`);
    const data = await resp.json();
    dispatch({
      type: SEARCH_LOGS,
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
