import React from "react";
import createReactClass from "create-react-class";

const CustomerInformationForm = createReactClass({
  getInitialState: function() {
    return {
      customer: {
        firstName: "",
        email: ""
      }
    };
  },
  onSubmit: function() {},

  onChange: function(event) {
    const { name, value } = event.target;
    const customer = {
      ...this.state.customer,
      [name]: value
    }; // copy customer object, and set new value for property passed in.
    this.setState({ customer: customer });
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Tell us about yourself</h3>
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            id="firstName"
            type="text"
            name="firstName"
            onChange={this.onChange}
            value={this.state.customer.firstName}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.customer.email}
          />
        </div>

        <input type="submit" value="Book Flight" />
      </form>
    );
  }
});

export default CustomerInformationForm;
