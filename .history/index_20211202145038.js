const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello from the desk of Chris Miller'))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Example app listening on port 3000!'))