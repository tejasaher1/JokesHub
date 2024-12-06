const express = require('express');
const db = require('../Config/MySQL');

const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT * FROM favourites`;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch favourites' });
    }
    res.json(results);
  });
});

module.exports = router;
