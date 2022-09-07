const User = require("../models/user")

var getUsers=async(req,res)=>{
    const data=await User.findAll({})
res.send(data)
}
var postUser=async(req,res)=>{
    var postData=req.body
    const data=await User.create(postData)
   return res.status(200).json(data) 

}
var deleteUser=async(req,res)=>{
const deleteData=await User.destroy({
    where:{
        id:req.params.id
    }
})
 res.status(200).json(deleteData)
}




module.exports={getUsers,postUser,deleteUser}