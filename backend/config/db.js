import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv'

dotenv.config()

const mongo_url = process.env.MONGO_URI
const database = new mongoose.connect("",()=>{

})