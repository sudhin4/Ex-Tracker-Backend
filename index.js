require('dotenv').config();
const connectDatabase = require('./Config/DatabaseConnection.js')
const express = require("express");
const app = express();
const cors = require("cors");
const Loginroute = require("./Routes/LoginRoute.js");
const Singuproute = require('./Routes/SignupRoute.js')
const IslogedinRoute = require('./Routes/IsloginCheckroute.js');
const IncomeexpanseRoute = require('./Routes/InExdataRoute.js');
const cookieParser = require('cookie-parser');
const LastTranscation = require('./Routes/LastTransactionRoute.js');
const Singlepagesection = require('./Routes/SinglepageRoute.js')
const Totalbalancesection = require('./Routes/TotalBalanceRoute.js');
const ChartDatasection = require('./Routes/ChartDataRoute.js');
const Logoutsection = require('./Routes/LogoutRoute.js');
const LineChartSection = require('./Routes/LinechartRoute.js');
const UpdateInexRoute = require('./Routes/UpdataInexroute.js');
const DeleteRoute = require('./Routes/DeleteTransactionRoute.js');

const serverless = require('serverless-http')
connectDatabase();
app.use(express.json());
app.use(cookieParser())


app.use(cors({
  origin: [
    "https://extracker-ten.vercel.app/",                
  ],
  methods: ["GET", "POST", "PUT", "DELETE","HEAD","PATCH"],
  credentials: true
}));


app.use('/api/v1', Loginroute);
app.use('/api/v1',Singuproute);
app.use('/api/v1',IslogedinRoute);
app.use('/api/v1',IncomeexpanseRoute);
app.use('/api/v1',LastTranscation);
app.use('/api/v1',Singlepagesection);
app.use('/api/v1',Totalbalancesection);
app.use('/api/v1',ChartDatasection);
app.use('/api/v1',Logoutsection);
app.use('/api/v1',LineChartSection);
app.use('/api/v1',UpdateInexRoute);
app.use('/api/v1',DeleteRoute);

app.get('/api/v1/test',(req,res)=>{
  console.log(("test route hit"))
  res.json({success:true})
})




module.exports = app
module.exports.handler = serverless(app)