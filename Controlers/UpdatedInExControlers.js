const Inexmodel = require('../Models/InExDataModel');

exports.UpdateInExControlers = async (req, res, next) => {
    const email = req.id;



    const Amountprice = req.body.Amount


    const { id } = req.params

    const data = await Inexmodel.findByIdAndUpdate(id, { $set: { Amount: Amountprice } }, { new: true });

    res.json({
        success: true,
        message: "Update Successfully",
        userdata: data
    })




}