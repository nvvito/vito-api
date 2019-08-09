const express = require('express')
const app = express()
const http = require('http').Server(app)
//const io = require('socket.io')(http)
const PORT = process.env.PORT || 5000
//modules
const db = require('./db').DB
const router = require('./routers')
const middleware = require('./middlewares')
const header = require('./headers')

//middleware
middleware(app)
//addHeaders
header(app)
//routes
app.use(router)
//db connects
db.connect('mongodb://vito:v200770@ds235053.mlab.com:35053/api', err => {
    if (err) {
        return console.log('problem to conect db')
    }
    console.log('Connected successfully to db server')
})
//start server
http.listen(PORT, () => console.log(`Listening on ${PORT}`))