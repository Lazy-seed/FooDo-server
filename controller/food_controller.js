import foodsSchema from "../models/food_models.js";








export const addFoods = async (req, res) => {
    const data = req.body;

    const result = await foodsSchema.create(data)

    if (result) {

        res.status(200).json({
            success: true,
            msg: "food added",
            result
        })
    }
    else {
        res.status(400).json({
            success: false,
            msg: "food not added",
            result
        })
    }


}



// get food on category
export const getFoods = async (req, res) => {


    const type = req.params.type.toLowerCase();

    const result = await foodsSchema.find({ category: type })

    if (result.length!=0) {
        res.status(200).json({
            success: true,
            msg: "gets",
            result
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "fail"
        })
    }
}



export const allFoods = async (req, res) => {


    console.log("all foods");

}














