const mongoose = require('mongoose');

const connectdatabase = () =>{
    
     mongoose.connect(process.env.DATABASE_URL).then((con)=>{
        console.log("Database is connected url");
        console.log('Database is connected successfully'+ con.connection.host);
     })
}

module.exports = connectdatabase