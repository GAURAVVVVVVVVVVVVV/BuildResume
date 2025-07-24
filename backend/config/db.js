import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://gauravgzb850:resume123@cluster0.3wpwqgx.mongodb.net/RESUME')
    .then(()=>console.log('DB connected'))
}