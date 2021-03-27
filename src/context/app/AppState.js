import React, { useReducer } from "react";
import axios from "axios";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { SET_LOADING, GET_PARAGRAPHS } from "../types";

const AppState = (props) => {
  const initialState = {
    paragraphs: [],
    number_of_paragraphs: 1,
    loading: false,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const setLoading = () => dispatch({ type: SET_LOADING });
  const getParagraphs = async (search) => {
    setLoading();
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/v1/paragraphs?number_of_paragraphs=${search}`
    );
    dispatch({
      type: GET_PARAGRAPHS,
      payload: res.data.data.attributes.paragraphs,
    });
  };
  return (
    <AppContext.Provider
      value={{
        paragraphs: state.paragraphs,
        loading: state.loading,
        getParagraphs: getParagraphs,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
