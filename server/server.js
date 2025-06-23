const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: '*', 
}));

app.use(express.json());

const gasStations = [
  { id: 1, name: "Gas Station A", price: 4.25, location: "123 Main St" },
  { id: 2, name: "Gas Station B", price: 4.15, location: "456 Oak Ave" },
];

app.get('/api/gas', (req, res) => {
  res.json(gasStations);
});

app.get('/test', (req, res) => {
    res.send('Test route is working');
  });
  

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
