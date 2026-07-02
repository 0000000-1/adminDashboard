import express from 'express'
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send('server working sucessfully!')
    console.log("working")
})

const Port = process.env.PORT || 2023

app.listen(Port,()=>{
    console.log("working boy")
})