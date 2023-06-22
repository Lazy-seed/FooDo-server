import mongoose from "mongoose";

const foods= new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },
    desc:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    trending:{
        type:Number,
        default:0
    },
    popular:{
        type:Number,
        default:0
    }
})


const foodsSchema =mongoose.model("foods",foods)
export default foodsSchema;














