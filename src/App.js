import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AppState from "./context/app/AppState";
import ParagraphGenerator from "./components/paragraph_generator/ParagraphGenerator";

const App = () => {
  return (
    <AppState>
      <Fragment>
        <Navbar />
        <main className="main">
          <ParagraphGenerator />
        </main>
      </Fragment>
    </AppState>
  );
};

export default App;
