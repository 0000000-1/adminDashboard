import express from 'express'
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.get('/',(req,res)=>{
    res.append('qssd')
})

const Port = process.env.port || 2023

app.listen(Port,()=>{
    console.log('asdfg')
})