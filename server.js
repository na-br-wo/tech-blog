const express = require('express')
const app = express()

const PORT = 3001

app.get('/', (req, res) => {
  res.send('Hello world')
})

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});