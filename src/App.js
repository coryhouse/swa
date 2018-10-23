import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import BookFlight from "./BookFlight";
import Nav from "./Nav";
import createReactClass from "create-react-class";
import "./App.css";

const App = createReactClass({
  render: function() {
    return (
      <>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/book-flight" component={BookFlight} />
      </>
    );
  }
});

export default App;
