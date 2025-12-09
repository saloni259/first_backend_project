import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const connectDB = async () => {
    try{
      const take =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      
      console.log(`\n mongodb connected !! DB HOST : ${take.connection.host}`)
    }catch (error){
        console.log("MONGOODB CONECTION ERROR", error);
        
        process.exit(1);
    }
    
}
export default connectDB;