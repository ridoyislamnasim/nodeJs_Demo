const { render } = require("ejs");
const express = require("express");

portFolioPage = async (req, res) => {
    console.log('get')
    res.render('portFolio/portFolio.ejs')
}
module.exports = {
    portFolioPage
};