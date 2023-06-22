import cartschema from "../models/cart_model.js";



// all cart
export const allCart = async (req, res) => {
    const data = req.body
    const result = await cartschema.find({ userID: req.userID });

    if (result) {
        res.status(200).json({
            success: true,
            msg: "get cart",
            result
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "fail cart",
        })
    }
}



// add cart
export const addCart = async (req, res) => {
    const { name, price, img,desc } = req.body;

    const result = await cartschema.create({ name,desc, price, img,userID:req.userID });

    if (result) {
        res.status(200).json({
            success: true,
            msg: "item -> cart",
            result
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "item X cart",
        })
    }
}


// delete cart
export const deleteCart = async (req, res) => {
    const id = req.params.id
    const result = await cartschema.deleteOne({ _id: id });

    if (result) {
        res.status(200).json({
            success: true,
            msg: "cart remove item",
            result
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "cart X item",
        })
    }
}

















