import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import studentRoutes from './routes/student.routes.js'

//rest object
const app = express();

//mongo connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (_req, res) => {
  res.send("<h1>Welcome Home</h1>");
});

//routes
app.use("/api/v1", studentRoutes)


//PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () =>
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on Port ${PORT}`
  )
);
