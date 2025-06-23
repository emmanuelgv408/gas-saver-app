exports.getGasStations = (req, res) => {
    const gasStations = [
      { id: 1, name: "Gas Station A", price: 4.25, location: "123 Main St" },
      { id: 2, name: "Gas Station B", price: 4.15, location: "456 Oak Ave" },
    ];
    res.json(gasStations);
  };
  