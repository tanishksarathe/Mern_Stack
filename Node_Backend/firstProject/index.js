import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectdb from "./src/config/db.js";
import authRouter from "./src/routes/myrouter.js";

const app = express();

app.use(express.json()); // to decrypt the response came from frontend !important

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  console.log("sanjana pagal h");

  res.json({
    message: "Server Sending Request ....",
  });
});

// Default error handler
app.use((err,req,res,next) => {
  const errorMessage = err.message || "Something went wrong";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({message: errorMessage});
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port : ${port}`);
  connectdb();
});
