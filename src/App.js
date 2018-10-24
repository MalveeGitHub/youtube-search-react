import React, { Component } from "react";
import "./App.css";
import YouTube from "./components/Youtube.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center text-danger">
          YouTube Search With React.js{" "}
          <span className="text-info h4">Made By M.Alvee</span>
        </h1>
        <YouTube />
      </div>
    );
  }
}

export default App;
