import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";

dotenv.config();

//database config
connectDB();


//obj of rest
const app = express(); 

//middle wares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//api.rest
app.get("/", (_req,res) => {
    res.send("<h1>Welcome to My website</h1>");
});

//port
const PORT= process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running On ${process.env.DEV_MODE} mode on Port ${PORT}`.bgCyan.white);
});