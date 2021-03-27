import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AppState from "./context/app/AppState";
import Demo from "./components/demo/Demo";

const App = () => {
  return (
    <AppState>
      <Fragment>
        <Navbar title="React Front End App" />
        <main className="main">
          <Demo />
        </main>
      </Fragment>
    </AppState>
  );
};

export default App;
