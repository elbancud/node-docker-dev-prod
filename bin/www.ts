const app = require('../app');

// const PORT = normalizePort(process.env.PORT || 4000); // Default port optimal;
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening sa emong ${PORT}`);
});
