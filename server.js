var path = require('path');

var bodyParser = require('body-parser');

const express = require('express');
const { exec } = require('child_process');
const app = express();

app.listen(5000, () => console.log('http://localhost:5000'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  if(req.body){
    console.log("irsend SEND_ONCE Samsung_BN59-01315B " + req.body.btnname);
    exec("irsend SEND_ONCE Samsung_BN59-01315B " + req.body.btnname);
  }
  res.sendStatus(202);
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
