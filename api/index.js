// index.js
require('dotenv').config();
const express = require("express");
const serverless = require('serverless-http');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const connectDatabase = require('./Config/DatabaseConnection');

// Routes
const Loginroute = require("./Routes/LoginRoute");
const Singuproute = require('./Routes/SignupRoute');
const IslogedinRoute = require('./Routes/IsloginCheckroute');
const IncomeexpanseRoute = require('./Routes/InExdataRoute');
const LastTranscation = require('./Routes/LastTransactionRoute');
const Singlepagesection = require('./Routes/SinglepageRoute');
const Totalbalancesection = require('./Routes/TotalBalanceRoute');
const ChartDatasection = require('./Routes/ChartDataRoute');
const Logoutsection = require('./Routes/LogoutRoute');
const LineChartSection = require('./Routes/LinechartRoute');
const UpdateInexRoute = require('./Routes/UpdataInexroute');
const DeleteRoute = require('./Routes/DeleteTransactionRoute');

const app = express();

// ===== Middleware =====
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true
}));

// ===== Connect to DB once globally =====
connectDatabase().catch(err => {
    console.error("Failed to connect DB:", err.message);
});

// ===== Routes =====
app.use('/api/v1', Loginroute);
app.use('/api/v1', Singuproute);
app.use('/api/v1', IslogedinRoute);
app.use('/api/v1', IncomeexpanseRoute);
app.use('/api/v1', LastTranscation);
app.use('/api/v1', Singlepagesection);
app.use('/api/v1', Totalbalancesection);
app.use('/api/v1', ChartDatasection);
app.use('/api/v1', Logoutsection);
app.use('/api/v1', LineChartSection);
app.use('/api/v1', UpdateInexRoute);
app.use('/api/v1', DeleteRoute);

// ===== Error handling =====
app.use((err, req, res, next) => {
    console.error("Server error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
});

// ===== Serverless export for Vercel =====
module.exports = serverless(app);
