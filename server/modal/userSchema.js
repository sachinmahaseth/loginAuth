import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role:{
        type:Number,
        default:0
    }
})



export  default mongoose.model('newreg', UserSchema);
