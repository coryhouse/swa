// Create a navigation bar with links to Home and Book Flight
// Use React router's Link component for the links.
// Display this component on App.js above our h1 header.
import React from "react";
import createReactClass from "create-react-class";
import { Link } from "react-router-dom";

const Nav = createReactClass({
  render: function() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book-flight">Book flight</Link>
        </li>
      </ul>
    );
  }
});

export default Nav;
