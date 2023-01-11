const express = require('express');

const routes = express.Router();

routes.get("/", async (req, res) => {
    res.send("I'm Working..");
});

module.exports = routes;