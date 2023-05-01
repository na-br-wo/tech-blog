const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('./views/main.handlebars')
})

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});