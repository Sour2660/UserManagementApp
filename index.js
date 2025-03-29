const express = require('express')
const dotenv= require('dotenv');   //import 
const userRoutes = require('./routes/userRoutes'); //importing routes from routes folder
const connectDB = require('./config/database');
const cors = require('cors');


dotenv.config();
const app= express()
app.use(cors());
const PORT = process.env.PORT || 5000

connectDB();
app.use(express.json());   

app.use('/api/users',userRoutes)





app.listen(PORT,()=>{console.log(`Running on http://localhost:${PORT}`);
})