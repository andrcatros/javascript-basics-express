/* eslint-disable prefer-destructuring */
const express = require('express');

const app = express();

app.use(express.json());

const stringsMethods = require('./lib/strings');
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');

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

// add
app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber, 10);
  const secondNumber = parseInt(req.params.secondNumber, 10);

  if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    res.status(200).json({ result: add(firstNumber, secondNumber) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// substract
app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber, 10);
  const secondNumber = parseInt(req.params.secondNumber, 10);

  if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    res.status(200).json({ result: subtract(secondNumber, firstNumber) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// multiply
app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

module.exports = app;
