const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const mysql = require('./db/mysql');
const mongo = require('./db/mongo');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur le projet Hervé !');
});

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
