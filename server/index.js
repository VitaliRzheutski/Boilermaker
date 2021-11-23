const express = require('express')
const app  = express()
const path = require('path')

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public'));
  });

module.exports = app