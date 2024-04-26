// directions.js

const fetch = require('node-fetch');

const API_KEY = 'your_api_key';
const startLocation = 'Berlin Hauptbahnhof';
const endLocation = 'Brandenburger Tor';

async function getTransitRoutes() {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&mode=transit&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'OK') {
            const routes = data.routes;
            return routes;
        } else {
            throw new Error(data.status);
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

module.exports = {
    getTransitRoutes
};
