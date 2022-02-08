const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')

const app = express()

const SERVER_PORT = 4004

app.use(express.json())
app.use(cors())

// Endpoints:

app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)



app.listen(SERVER_PORT, () => console.log(`Clean up on aisle ${SERVER_PORT}`))