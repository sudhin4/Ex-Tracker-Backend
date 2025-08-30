const InExDataModel = require('../Models/InExDataModel')


exports.TotalbalanceControlers = async (req, res, next) => {
    const id = req.id;
  
    const DataIncome = await InExDataModel.find({ Email: id, Category: "Income" });
    const DataExpanse = await InExDataModel.find({ Email: id, Category: "Expanses" });



    let Incomeamount = 0;
    let Expanseamount = 0;

    DataIncome.forEach((item) => {
        return (
            Incomeamount += item.Amount
        )
    });

    DataExpanse.forEach((item) => {
        return (
            Expanseamount += item.Amount
        )
    });

    const TotalAmount = Incomeamount - Expanseamount;

   

    res.json({
        success: true,
        message: "Total Amount",
        TotalMoney: TotalAmount,
        Incomevalue: Incomeamount,
        Expansevalue: Expanseamount,
    })
}