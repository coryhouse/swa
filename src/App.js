import React from "react";
import { add } from "./math";
import Nav from "./Nav";
import createReactClass from "create-react-class";
import "./App.css";

const App = createReactClass({
  render: function() {
    return (
      <>
        <Nav />
        <h1>Home</h1>
        {add(1, 2)}
      </>
    );
  }
});

export default App;
