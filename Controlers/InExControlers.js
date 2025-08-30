const InExDatamodel = require('../Models/InExDataModel');


exports.InExcontrolers = (req,res,next)=>{
    const userData = req.body;
    console.log(userData)
    
    const Emailid = req.id;
    
    const Category = userData.Category
    const TransactionName = userData.TransactionName
    const Amount = userData.Amount
    const Date = userData.Date
    const Note = userData.Note
    const Time = userData.Time

    
    if( Category && TransactionName && Amount && Date && Note && Time){
        InExDatamodel.create({Email :Emailid,Category:Category,TransactionName:TransactionName,Amount:Amount,Date:Date,Note:Note,Time:Time})
        res.json({
            success:true,
            message:'The data is added'
        })
    }   
    res.json({
        success:true,
        message:"Please Fill all the fields"
    })
}