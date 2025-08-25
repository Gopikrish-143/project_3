const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dbConnect();


const app = express();

// middleware
app.use(cors());
app.use(express.json());


// Serve React frontend
const __dirname1 = path.resolve();  // get root dir
app.use(express.static(path.join(__dirname1, "dist"))); // or "/frontend/build" for CRA

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1, "dist", "index.html")); 
});


// routes
app.use("/api/auth", authRoutes);

//server 
const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})