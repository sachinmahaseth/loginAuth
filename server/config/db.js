import mongoose from "mongoose";
// import colors from 'colors';


const connectDB = async () => {
    try{
        const conn = await mongoose.connect( process.env.MONGO_URL)
        console.log(
            `Connected To Mongoose Database ${conn.connection.host} `
        );
    } catch (error) {
        console.log(`Error in Mongoose ${error}` );
    }
};
export default connectDB;