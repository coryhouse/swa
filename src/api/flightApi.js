export function getFlights() {
  return Promise.resolve([
    {
      id: 1,
      destination: "MCI",
      origin: "LAX",
      date: "1/18/2018",
      price: 139,
      wifi: true,
      flightNumber: 98
    },
    {
      id: 2,
      destination: "DAL",
      origin: "LAX",
      date: "1/19/2018",
      price: 129,
      wifi: false,
      flightNumber: 198
    },
    {
      id: 3,
      destination: "ORL",
      origin: "LAX",
      date: "1/19/2018",
      price: 129,
      wifi: false,
      flightNumber: 192
    }
  ]);
}
