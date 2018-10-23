import React from "react";
import createReactClass from "create-react-class";
// import { getFlights } from "./api/flightApi";
import CustomerInformationForm from "./CustomerInformationForm";
import FlightStore from "./store/flightStore";

const BookFlight = createReactClass({
  getInitialState: function() {
    return {
      flights: [],
      selectedFlight: null
    };
  },

  componentWillMount: function() {
    debugger;
    FlightStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    FlightStore.removeChangeListener(this.onChange);
  },

  onChange: function() {
    debugger;
    this.setState({ flights: FlightStore.getFlights() });
  },

  //   componentDidMount: function() {
  //     // var self = this;
  //     getFlights().then(flights => {
  //       this.setState({ flights: flights });
  //     });
  //   },

  selectFlight: function(flight) {
    this.setState({ selectedFlight: flight });
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
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <td role="presentation" />
            </tr>
          </thead>
          <tbody>
            {this.state.flights.map(flight => {
              // destructure to shorten calls below.
              const { id, origin, destination, date, price } = flight;
              return (
                <tr key={id}>
                  <td>{origin}</td>
                  <td>{destination}</td>
                  <td>{date}</td>
                  <td>{price}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.selectFlight(flight)}
                    >
                      Select flight
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {this.state.selectedFlight && (
          <>
            <h2>Selected Flight</h2>
            Yee ha! You're going to {this.state.selectedFlight.destination}!
            <CustomerInformationForm />
          </>
        )}
      </>
    );
  }
});

export default BookFlight;
