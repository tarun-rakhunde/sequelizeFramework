const express=require("express")
const app=express()
app.use(express.json())
var bodyParser = require('body-parser')


const User=require("./models/user")

var userCtlr=require("./controller/user.controller")
app.get("/",(req,res)=>{
res.send("hello")
})


app.get("/users",userCtlr.getUsers)
app.post("/users",userCtlr.postUser)
app.delete("/users/:id",userCtlr.deleteUser)


User.sync({ force: false })
app.listen(2000,()=>{
    console.log("port is running on 2000")
})