import React from "react";
import createReactClass from "create-react-class";
import { getFlights } from "./api/flightApi";
import { Link } from "react-router-dom";

const BookFlight = createReactClass({
  getInitialState: function() {
    return {
      flights: []
    };
  },

  componentDidMount: function() {
    // var self = this;
    getFlights().then(flights => {
      this.setState({ flights: flights });
    });
  },

  render: function() {
    return (
      <>
        <h1>Book Flight</h1>
        <table>
          <caption>Available flights</caption>
          <thead>
            <tr>
              <th scope="col">Origin</th>
              <th scope="col">Destination</th>
            </tr>
          </thead>
          <tbody>
            {this.state.flights.map(flight => {
              return (
                <tr>
                  <td>{flight.origin}</td>
                  <td>{flight.destination}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
});

export default BookFlight;
