const express = require('express');
const PORT = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const jokesRoutes = require('./routes/jokes');
const favouritesRoutes = require('./routes/favourites');
const db = require("./Config/MySQL");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/jokes', jokesRoutes);
app.use('/api/favourites', favouritesRoutes);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
