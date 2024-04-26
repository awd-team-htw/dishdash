// server.js

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const { getTransitRoutes } = require('./directions');

const API_KEY = 'your_api_key';
const startLocation = 'Berlin Hauptbahnhof';
const endLocation = 'Brandenburger Tor';

app.use(express.static('public'));

app.get('/api/transit-routes', async (req, res) => {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&mode=transit&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ status: 'ERROR', message: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
