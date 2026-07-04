import express from 'express'
import dotenv from "dotenv"
import database from './config/db.js'

const app = express()
dotenv.config()

database()
app.get('/',(req,res)=>{
    res.send('server working sucessfully!')
    console.log("working")
})

const Port = process.env.PORT || 2023

app.listen(Port,()=>{
    console.log("working boy")
})