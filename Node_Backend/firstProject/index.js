import dotenv from 'dotenv'
dotenv.config();
import express from "express";

const app = express();

app.get("/",(req,res) => {

    console.log("sanjana pagal h");
    
    res.json({
        message:"Server Sending Request ...."
    })
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server started at port : ${port}`);
})