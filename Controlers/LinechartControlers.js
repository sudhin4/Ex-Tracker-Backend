const InExDataModel = require('../Models/InExDataModel');


exports.LinechartControlers = async (req, res, next) => {
    const Emailid = req.id;


    const IncomeData = await InExDataModel.find({ Email: Emailid, Category: "Income" })
    const ExpanseData = await InExDataModel.find({ Email: Emailid, Category: "Expanses" })

    

    //get Income Month Wise
    const MonthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const grouped = IncomeData.reduce((acc, item) => {

        const [date, monthnum, year] = item.Date.split('/')


        const month = MonthName[monthnum];


        let existing = acc.find((d) => d.month === month);
        if (existing) {
            existing.Income += Number(item.Amount);
        } else {
            acc.push({ month: month, Income: Number(item.Amount) });
        }
        return acc;
    }, [])

 

    const Datewisedata = IncomeData.reduce((acc,item)=>{
        const [date,month,year] = item.Date.split('/');
        const wholedate = `${date}/${month}`;
        let existing = acc.find((d)=>d.Date === date);
        if(existing){
            existing.Income += Number(item.Amount)
        }
        else{
            acc.push({month:wholedate,Income:Number(item.Amount)})
        }
        return acc;
    },[])

    

    //expanse Data

    const groupedExpanse = ExpanseData.reduce((acc, item) => {

        const [date, monthnum, year] = item.Date.split('/')


        const month = MonthName[monthnum];


        let existing = acc.find((d) => d.month === month);
        if (existing) {
            existing.Income += Number(item.Amount);
        } else {
            acc.push({ month: month, Income: Number(item.Amount) });
        }
        return acc;
    }, [])

    //date wise

    const DatewisedataExpanse = ExpanseData.reduce((acc,item)=>{
        const [date,month,year] = item.Date.split('/');
        const wholedate = `${date}/${month}`;
        let existing = acc.find((d)=>d.Date === date);
        if(existing){
            existing.Income += Number(item.Amount)
        }
        else{
            acc.push({month:wholedate,Income:Number(item.Amount)})
        }
        return acc;
    },[])
    



    res.json({
        success: true,
        message: "Route worked successfully",
        LinechartMonthwise: grouped,
        LinechartDatewise:Datewisedata,
        LinechartExpanse:groupedExpanse,
        LinechartexpanseDatewise:DatewisedataExpanse

    })
}