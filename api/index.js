require('dotenv').config();
const connectDatabase = require('../Config/DatabaseConnection.js')
const express = require("express");
const app = express();
const cors = require("cors");
const Loginroute = require("../Routes/LoginRoute");
const Singuproute = require('../Routes/SignupRoute')
const IslogedinRoute = require('../Routes/IsloginCheckroute');
const IncomeexpanseRoute = require('../Routes/InExdataRoute');
const cookieParser = require('cookie-parser');
const LastTranscation = require('../Routes/LastTransactionRoute');
const Singlepagesection = require('../Routes/SinglepageRoute')
const Totalbalancesection = require('../Routes/TotalBalanceRoute');
const ChartDatasection = require('../Routes/ChartDataRoute');
const Logoutsection = require('../Routes/LogoutRoute');
const LineChartSection = require('../Routes/LinechartRoute');
const UpdateInexRoute = require('../Routes/UpdataInexroute');
const DeleteRoute = require('../Routes/DeleteTransactionRoute');

const serverless = require('serverless-http')
connectDatabase();
app.use(express.json());
app.use(cookieParser())


app.use(cors({
  origin: [
    "http://localhost:5173",                
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
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