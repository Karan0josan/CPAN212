import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user_router from "./routes/user_router.js";
import delivery_router from "./routes/deliviery_router.js"
import appointment_router from "./routes/appointment_route.js"
import router from "./routes/user_router.js";


//variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;


// Middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// app.use("/api/", router);

//start up
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("DB is connected")
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    });
});

//routes
// app.use("/book", book_router);
app.use("/user", user_router);
app.use("/delivery", delivery_router);
app.use("/drivers", appointment_router);

