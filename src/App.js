import { hot } from "react-hot-loader/root";
import React from "react";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <div id="page-body" className="bg-light">
        <Router />
      </div>
    </div>
  );
}

export default hot(App);
