const express = require('express');

const app = express();

const stringsMethods = require('./lib/strings.js');

// hello world

app.get('/strings/hello/world', (req, res) => {
  res.json({ result: 'Hello, world!' });
});

// hello turtle

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: stringsMethods.sayHello(req.params.string) });
});

// uppercased string

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: stringsMethods.uppercase(req.params.string) });
});

// lowercase string

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: stringsMethods.lowercase(req.params.string) });
});

// first character

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: stringsMethods.firstCharacter(req.params.string) });
  } else {
    res.json({
      result: stringsMethods.firstCharacters(req.params.string, parseInt(req.query.length, 10)),
    });
  }
});

module.exports = app;
