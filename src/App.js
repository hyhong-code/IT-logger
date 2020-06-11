import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initialize materialize javascript on load
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
    </Fragment>
  );
};

export default App;
