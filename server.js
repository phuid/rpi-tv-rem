const { readFileSync, writeFileSync } = require('fs');

var path = require('path');

const express = require('express');
const { exec } = require('child_process');
const app = express();

var count;
var newCount;

app.listen(5000, () => console.log('http://localhost:5000'));

app.post('/clicked', (req, res) => {
  count = readFileSync('./count.txt', 'utf-8');
  console.log('count ', count)

  newCount = parseInt(count) + 1
  console.log('newcount', newCount.toString())

  writeFileSync('./count.txt', newCount.toString());
  res.sendStatus(201);
});

app.get('/style.css', function(req, res) {
  res.sendFile(path.resolve('index/style.css'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index/index.html'));

  // res.send(`
	// 	<!DOCTYPE html>
	// 	<html>
  //     <head>
  //         <meta charset="utf-8">
  //         <title>Node + Express + MongoDb example</title>
  //     </head>
  //     <body>
  //         <h1>Node + Express + MongoDb example</h1>
  //         <p id="counter">Loading button click data.</p>
  //         <button id="myButton">Click me!</button>
  //     </body>
	// 	<script>
  //   console.log('Client-side code running');

  //   const button = document.getElementById('myButton');
  //   button.addEventListener('click', function(e) {
  //     console.log('button was clicked');
  //     fetch('/clicked', {method: 'POST'})
  //       .then(function(response) {
  //         if(response.ok) {
  //           console.log('click was recorded');
  //           return;
  //         }
  //         throw new Error('Request failed.');
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   });
	// 	</script>
	// 	</html>
	// `);
});


