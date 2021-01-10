const express = require('express')
const app = express()
const PORT = 5000

app.use('/api/v1/aws-demo', require('./routes/routes'))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})