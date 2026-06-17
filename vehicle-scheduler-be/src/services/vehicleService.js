const axios = require("axios");

const TOKEN = process.env.TOKEN;

const headers = {
    Authorization: `Bearer ${TOKEN}`
};

async function getDepots() {
    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        { headers }
    );

    return response.data;
}

async function getVehicles() {
    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/vehicles",
        { headers }
    );

    return response.data;
}

module.exports = {
    getDepots,
    getVehicles
};