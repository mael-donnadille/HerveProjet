const db = require('../db/mysql');

exports.register = (req, res) => {
  const { nom, prenom, email, password } = req.body;

  db.query('INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)',
    [nom, prenom, email, password],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erreur d\'enregistrement');
      }
      res.status(201).send('Utilisateur enregistré avec succès');
    }
  );
};
