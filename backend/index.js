import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import morgan from "morgan";
import router from "./routes/route.js";

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
