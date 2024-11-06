const express = require('express')
const Port = 3000
const app = express()

app.get('/', (req,res) => {
    res.send("Hello world")    
})

app.listen(Port, (req,res) => {
    console.log("Server is working on port 3000")
})