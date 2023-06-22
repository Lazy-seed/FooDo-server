import mongoose from 'mongoose';


const cart =new mongoose.Schema({
    userID:{
        type:Object,
        default:'1'
    },
    name:{
        type:String
    },
    desc:{
        type:String
    },
    price:{
        type:Number
    },
    img:{
        type:String
    },
    category:{
        type:String
    },
    cart_date:{
        type:Date,
        default:new Date()
    }
})

const cartschema = mongoose.model("cart",cart);
export default cartschema

