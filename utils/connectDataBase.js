
import mongoose from "mongoose"

export const connectToDatabase = async()=>{
    try {
        const connected= await mongoose.connect(process.env.MONGO_URI)
        if(connected){
            console.log("Connected to MongoDB.")
        }else{
            console.log("Something Went Wrong.")
        }
        
    } catch (error) {
        console.log("Error while connecting to DataBase",error.message)
        
    }

}
