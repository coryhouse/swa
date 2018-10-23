var Dispatcher = require("../dispatcher/appDispatcher");
var flightApi = require("../api/flightApi");
var ActionTypes = require("../constants/actionTypes");

var FlightActions = {
  getFlights: function() {
    flightApi.getFlights.then(flights => {
      var flights = flights;

      // Hey dispatcher, go tell all the stores that new flight info
      // has been loaded.
      Dispatcher.dispatch({
        actionType: ActionTypes.GET_FLIGHT,
        flights: flights
      });
    });
  }
};

module.exports = FlightActions;
