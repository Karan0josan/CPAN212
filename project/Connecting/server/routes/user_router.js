import express from "express";
import cors from "cors";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  const { email, password, personName, companyName, phoneNumber } = req.body;
  console.log(`Received ${personName}, ${companyName}, ${phoneNumber}, ${password}, ${email}`);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      personName,
      companyName,
      phoneNumber,
    });

    await newUser.save();

    res.json({ message: "Account Created!" });
  } catch (err) {
    console.error("Error creating account:", err);
    res.status(400).json({ message: "Error creating Account - account may already exist." });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(400).json({ message: "No account on file" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password incorrect" });
    }

    const token = jwt.sign(
      {
        email: foundUser.email,
        companyName: foundUser.companyName,
        personName: foundUser.personName,
        isAdmin: foundUser.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      message: "You have logged in",
      token,
      user: {
        companyName: foundUser.companyName,
        personName: foundUser.personName,
        email: foundUser.email,
        isAdmin: foundUser.isAdmin,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
