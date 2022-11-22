/**
 * Thank you for using BetweenJS Package
 */
const express = require('express')
const app = express()
let port = 8080
let path = require('path')
let indexUI = require('./static/indexUi')
let data = require('./data/usersUi')
let fs = require('fs')
let o =(a)=>{console.log(a)}
//let jsonStr = (text)=>{return JSON.stringify(text, null, "\t")}

//app use
app.use(express.urlencoded({extended:true})) //res.body
app.use(express.json()) //It parses incoming JSON requests and puts the parsed data in req.body
app.use("/static", express.static('./static/')); //use this file

//sending Pages
app.get('/',(req,res)=>{res.send(indexUI.html_Container)})
app.get('/data',(req,res)=>{res.send(data.rowUser)})

app.listen(port, () => {console.log(`App listening on port ${port}`)})
