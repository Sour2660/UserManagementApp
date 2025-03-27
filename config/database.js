const mongoose = require('mongoose'); 
const dotenv= require('dotenv');


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Connected to Database"))
        .catch((error) => console.log("Failed to connect", error));
};



module.exports = connectDB