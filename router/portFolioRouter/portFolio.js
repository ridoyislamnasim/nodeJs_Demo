const express = require("express");
const portFolio = express.Router();
// Controller
const { portFolioPage } = require("../../controller/portFolio/portFolioController");
// ridoyIslamNasim/portfolio
portFolio.get("/",
    portFolioPage,
);

module.exports = portFolio;