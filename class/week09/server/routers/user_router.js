import express, { response } from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

//register
router.post("/register", (req, res)=>{
    const {email, password} = req.body;

    //bcrypt.hash(arg1, salt)
    bcrypt.hash(password, 10)
    .then((hasedPassword)=>{
        let newUser = new User({
            email,
            password: hasedPassword
        });

        newUser.save()
        .then(()=>{
            res.json({message:"Account Created!"})
        })
        .catch((err)=>{
            console.log(err);
            return res.status(400).json({message:"Error creating Account - account exist "})
        });
    })
    .catch((err)=>{
        console.log(err)
    });


});
//login
router.post("/login", (req, res)=>{
    const {email, password} = req.body;

    User.findOne({email: email})
    .then((findings)=>{
        if (!findings) {
            return res.status(400)
            .json({message: "No account on file"});
        }

        //compare password
        bcrypt.compare(password, findings.password)
        .then((comparedResults)=>{
            if (!comparedResults) {
                return res.status(400)
                .json({message: "Password incorrect"});
            }
            return res.json({message: "You have logged in"});
        });
    })
    .catch((err)=>{
        console.log(err);
        console.log("Could not find the accound");
    })
    
})


export default router;