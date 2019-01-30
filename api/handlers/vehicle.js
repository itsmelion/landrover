exports.list = (req, res) => {
  const vehicles = require('../sample_data/vehicles.js');
  return res.status(200).json(vehicles);
}

exports.details = ({ params }, res) => {
  const vehicle = require('./server_api/vehicle_'+ params.id +'.js');
  return res.json(vehicle);
}

exports.welcome = (req, res) => {
  const message = 'Welcome to C.Lion awesome API';

  return res.format({
    html: () => res.send(`<h1>${message}</h1>`),
    text: () => res.send(message),
    json: () => res.json({ message }),
   });
}
