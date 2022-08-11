const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const PORT = process.env.PORT
const connectDB = require('./config/db')

connectDB()

const app = express()

const mongoose = require('mongoose')

app.use(bodyParser.json())

// Sailors Router
const sailorsRouter = require('./routes/sailors')
// Ce code permet de ne pas répéter '/sailor' dans l'url
app.use('/sailors', sailorsRouter)




app.listen(PORT, () => {
    return console.log(`Server started on port ${PORT}`)
})