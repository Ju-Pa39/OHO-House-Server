const express = require('express')
const app = express()
const cors = require('cors');
const morgen = require('morgan')
const {readdirSync} = require('fs')

const authRouter = require('./routes/auth')

app.use(cors())
app.use(morgen('tiny'))
app.use(express.json())

app.use('/contact',authRouter)


app.listen(8000),
    ()=> console.log('Server is  running on prot 8000')