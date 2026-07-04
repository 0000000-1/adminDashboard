import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv'

dotenv.config()

const mongo_url = process.env.MONGO_URI

// const dbs = async (()=>{

// })
const database = async ((req, res) => {
   try {
      const db = new database.connect(mongo_url)
      console.log('wokin mng')
   } catch (error) {
      res.status(500).json({ message: 'not connected to database' })
   }
}
)
// export dbs = module.database
export default database