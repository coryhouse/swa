export function getFlights() {
  return Promise.resolve([
    {
      destination: "MCI",
      origin: "LAX",
      date: "1/18/2018",
      price: 139,
      wifi: true,
      flightNumber: 98
    },
    {
      destination: "DAL",
      origin: "LAX",
      date: "1/19/2018",
      price: 129,
      wifi: false,
      flightNumber: 198
    },
    {
      destination: "ORL",
      origin: "LAX",
      date: "1/19/2018",
      price: 129,
      wifi: false,
      flightNumber: 198
    }
  ]);
}
