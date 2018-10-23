var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var CHANGE_EVENT = "change";

var _flights = [];

var FlightStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getFlights: function() {
    return _flights;
  }
});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.FLIGHTS_LOADED:
      debugger;
      _flights = action.flights;
      FlightStore.emitChange();
      break;
    default:
    // no op
  }
});

module.exports = FlightStore;
