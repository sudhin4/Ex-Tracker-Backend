const Inexmodel = require("../Models/InExDataModel");

exports.DeleteTransactionControlers = async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    const email = req.body.Email;
    console.log(email)

    const data = await Inexmodel.findByIdAndDelete(id, { new: true })
    const Transactions = await Inexmodel.find({Email:email})

    res.json({
        success: true,
        message: 'Delete Successfully',
        
    })
}