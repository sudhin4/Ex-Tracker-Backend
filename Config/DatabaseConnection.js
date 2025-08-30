// Config/DatabaseConnection.js
const mongoose = require("mongoose");

let isConnected = false; // global variable to reuse connection

const connectDatabase = async () => {
  if (isConnected) return; // reuse existing connection

  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    isConnected = true;
    console.log(`✅ Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    throw error; // serverless will handle error
  }
};

module.exports = connectDatabase;
