import React from "react";
import createReactClass from "create-react-class";

const CustomerInformationForm = createReactClass({
  onSubmit: function() {},
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Tell us about yourself</h3>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" />

        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />

        <input type="submit">Book Flight</input>
      </form>
    );
  }
});

export default CustomerInformationForm;
