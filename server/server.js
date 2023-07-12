const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'votre_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'votre_base_de_donnees',
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données');
    }
});

app.get('/articles', (req, res) => {
    connection.query('SELECT * FROM articles', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des articles :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération des articles' });
        } else {
            res.status(200).json(results);
        }
    });
});


app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});