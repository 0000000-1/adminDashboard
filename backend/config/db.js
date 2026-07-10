import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv'
import dns from "node:dns/promises";

dotenv.config()
dns.setServers(["1.1.1.1", "8.8.8.8"]); // Forces Node to use Cloudflare/Google DNS

// const mongo_url = process.env.MONGO_URI

// const database = mongoose.connect(`${mongo_url}`, (req,res)=>{
//    try {
   //    } catch (error) {
      //       res.status(500).json({ message: 'not connected to database' })
      //    }
   // })
   
const newDb = async (req,res) =>{
   try {
      const connectDb = await mongoose.connect(process.env.MONGO_URI)
            console.log('runnging good! >)', connectDb.connection.host)
      console.log('happy running!')
   } catch (error) {
            console.error(error)
      res.status(500).json({message:"not wkrins"})
   }
}
export default newDb