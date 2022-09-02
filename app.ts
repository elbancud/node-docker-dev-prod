const express = require('express');
const app = express();
/**
 Middle goes here
 app.use();
 */

app.get('/', (request, response) => {
  response.send('<h1>Y r u geh</h1>');
});
