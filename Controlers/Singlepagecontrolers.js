const Incomexpansemodel = require('../Models/InExDataModel')


exports.Singlepagecontrolers = async (req, res, next) => {


    const id = req.body.Id
  

    const data = await Incomexpansemodel.findOne({ _id: id })
    
    
    if(data){
        res.json({
        success: true,
        message: "Route working",
        Transaction:data
    })
    }
    else{
        res.json({
            success:false,
            message:"The Transaction Not found."
        })
    }
    
}