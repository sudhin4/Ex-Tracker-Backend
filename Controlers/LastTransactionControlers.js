const InExModel = require('../Models/InExDataModel');


exports.LastTransactionControlers = async (req,res,next)=>{
    const userEmailid = req.id
    const Userdata = await InExModel.find({Email:userEmailid});
  

    res.json({
        success:true,
        message:"The Income and expanse data",
        LastTransaction:Userdata
    })
}