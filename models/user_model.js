import mongoose from "mongoose";

const user = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobile: {
        type: Number
    },


    // address 
    house: {
        type: String,
        default: ''

    },
    landMark: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    pincode: {
        type: Number,
        default: 0
    },

    tokens: [{
        token: {
            type: String
        }
    }
    ]
})


const userSchema = mongoose.model("user", user);
export default userSchema;
