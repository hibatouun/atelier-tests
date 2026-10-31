
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

// Configuration
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API : récupérer un utilisateur
app.get('/users/:id', async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ erreur: 'id invalide' });
    }

    try {
        const { rows } = await db.query(
            'SELECT id, nom FROM users WHERE id = $1',
            [id]
        );

        if (!rows[0]) {
            return res.status(404).json({ erreur: 'introuvable' });
        }

        return res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ erreur: 'Erreur serveur' });
    }
});

// API : authentification
app.post('/login', (req, res) => {
    const { email, password } = req.body || {};

    if (email === 'a@test.fr' && password === 'secret') {
        return res.status(200).json({
            message: 'Connexion réussie'
        });
    }

    return res.status(401).json({
        message: 'Identifiants invalides'
    });
});

module.exports = app;
