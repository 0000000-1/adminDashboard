import express from 'express'
import dotenv from "dotenv"
import newDB from './config/db.js'
import router from './routes/taskRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
newDB()

// router declaration
app.use('/api/v1/users', router)
//url https://localhost:2023/api/v1/users

// local connection
app.get('/',(req,res)=>{
    res.send('server working sucessfully!')
    console.log("working")
})

// port 
const Port = process.env.PORT || 2023

app.listen(Port,()=>{
    console.log("working boy")
})