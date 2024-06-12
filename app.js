const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { usermodel } = require("./models/user")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://bhagya:bhagya20@cluster0.gszky.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let user=new usermodel(input)
    user.save()
    console.log(user)
   res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
   usermodel.find().then(
    (data)=>{
        res.json(data)
    }
   ).catch(
    (error)=>{
        res.send(error)
    }
   )
})

app.listen(8086,()=>{
    console.log(("server started"))
})