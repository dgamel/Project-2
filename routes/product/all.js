const data = require('../../data.json');

module.exports = (req, res) => {
  const product = data.cohorts;

  res.status(200).json({ product });
};
