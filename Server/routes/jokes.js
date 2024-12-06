const express = require('express');
const axios = require('axios');
const db = require('../Config/MySQL');

const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const searchTerm = req.query.term || '';
    const response = await axios.get(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: { Accept: 'application/json' },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jokes' });
  }
});

router.post('/favourite', (req, res) => {
  const { joke_id, joke_text } = req.body;
  const query = `INSERT INTO favourites (joke_id, joke_text) VALUES (?, ?)`;

  db.query(query, [joke_id, joke_text], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Joke is already in favourites' });
      }
      return res.status(500).json({ error: 'Failed to save joke' });
    }
    res.json({ message: 'Joke saved successfully' });
  });
});

module.exports = router;
