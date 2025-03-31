import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';




import router from "./models/Router/recipes_router.js";



dotenv.config();
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
const PORT = 8001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("DB is connected");
})
.catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

// Routes
app.use('/recipe', router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
