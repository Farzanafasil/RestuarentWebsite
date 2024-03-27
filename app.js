import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname,'/build')));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname
  ,'/build/index.html')); });
dbConnection();

app.use(errorMiddleware);

export default app;
