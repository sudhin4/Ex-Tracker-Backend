const InExDataModel = require('../Models/InExDataModel')


exports.ChartDataControlers = async (req, res, next) => {

    const emailid = req.id

    const incomedata = await InExDataModel.find({ Email: emailid, $or: [{ Category: "Income" }, { Category: "income" }] })
    const expansedata = await InExDataModel.find({ Email: emailid, $or: [{ Category: "Expanses" }, { Category: "expanses" }] })
    

    let Incomechartvalue;
    let Expansechartvalue;

    if (incomedata) {
        //getting the price and category value from the array
        const gettingdetailsIncome = incomedata.reduce((acc, item) => {
            if (!acc[item.TransactionName]) {
                acc[item.TransactionName] = { id: item.TransactionName, label: item.TransactionName, value: 0 }
            }
            acc[item.TransactionName].value += item.Amount;
            return acc;
        },{})
        const finalresult = Object.values(gettingdetailsIncome);

        // used to remove the metadata from the array
        function getonlydata(arr, n) {
            const value = arr.filter(item => !item.activePaths && item !== false);
            return value
        }


        const cleanedvaleu = getonlydata(finalresult);
        Incomechartvalue = cleanedvaleu.filter(item => item.__v !== 0);
    }
    else {
        Incomechartvalue = 0
    }

    if (expansedata) {
        //for expanse value
        const gettingexpansefiltervalue = expansedata.reduce((acc, item) => {
            if (!acc[item.TransactionName]) {
                acc[item.TransactionName] = { id: item.TransactionName, label: item.TransactionName, value: 0 };
            }
            acc[item.TransactionName].value += item.Amount;
            return acc;
        },{})

        const geexval = Object.values(gettingexpansefiltervalue);

        function removemetadatafunction(arr) {
            const value = arr.filter(item => !item.activePaths && item !== false);
            return value;
        }

        const removemaindatavalue = removemetadatafunction(geexval);
        Expansechartvalue = removemaindatavalue.filter(item => item.__v !== 0);


    }
    else {
        Expansechartvalue = 0
    }






    res.json({
        success: true,
        message: "working",
        Incomepiechartvalue: Incomechartvalue,
        Expnasepiechartvalue: Expansechartvalue
    })
}