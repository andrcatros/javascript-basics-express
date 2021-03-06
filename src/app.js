/* eslint-disable prefer-destructuring */
const express = require('express');

const app = express();

app.use(express.json());

const stringsMethods = require('./lib/strings');
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');
const { removeNthElement2 } = require('./lib/arrays');
const { elementsStartingWithAVowel } = require('./lib/arrays');

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

// divide
app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

// remainder
app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

// element at index
app.post('/arrays/element-at-index/:index', (req, res) => {
  const array = req.body.array;
  res.status(200).json({ result: array[req.params.index] });
});

// array to string
app.post('/arrays/to-string', (req, res) => {
  const array = req.body.array;
  res.status(200).json({ result: array.toString() });
});

// append
app.post('/arrays/append', (req, res) => {
  const array = req.body.array;
  const value = req.body.value;
  res.status(200).json({ result: array.concat(value) });
});

// starts with a vowel
app.post('/arrays/starts-with-vowel', (req, res) => {
  const array = req.body.array;
  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

// remove element
app.post('/arrays/remove-element', (req, res) => {
  const array = req.body.array;

  if (req.query.index === undefined) {
    res.status(200).json({ result: removeNthElement2(0, array) });
  } else {
    res.status(200).json({ result: removeNthElement2(req.query.index, array)})
  }
});

module.exports = app;
