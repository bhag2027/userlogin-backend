const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "bloodgroup":String,
        "mob":String,
        "address":String,
        "pincode":String,
        "district":String,
        "place":String,
        "email":String,
        "username":String,
        "password":String
        }
)

let usermodel=mongoose.model("users",schema)
module.exports={usermodel}