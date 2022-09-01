const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('<h1>Y r u geh</h1>');
});

app.listen(PORT, () => {
  console.log(`Listening sa imong tanan @ ${PORT}`);
});
