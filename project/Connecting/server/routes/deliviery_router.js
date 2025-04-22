import express from "express";
import Delivery from "../models/delivery.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Token verification middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // pass decoded user to the next middleware/route
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

// Book a delivery
router.post("/booked", async (req, res) => {
  try {
    const {
      companyName,
      personName,
      email,
      date,
      boxes,
      pickup,
      dropoff,
      instructions,
      phoneNumber
    } = req.body;

    if (!companyName || !personName || !email || !date || !boxes || !pickup || !dropoff) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    console.log(`Received: ${companyName}, ${personName}, ${email}, ${date}, ${boxes}, ${pickup}, ${dropoff}, ${instructions}, ${phoneNumber}`);

    const newDelivery = new Delivery({
      companyName,
      personName,
      email,
      deliveryDate: date,
      boxes,
      pickupAddress: pickup,
      dropoffAddress: dropoff,
      instructions,
      phoneNumber
    });

    await newDelivery.save();
    res.json({ message: "Delivery Booked!" });
  } catch (err) {
    console.error("Error creating delivery:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Admin route to get deliveries for a specific date
router.get("/admin/deliveries", verifyToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }

  const dateQuery = req.query.date;
  if (!dateQuery) {
    return res.status(400).json({ message: "Date query missing" });
  }

  const start = new Date(dateQuery);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  try {
    const deliveries = await Delivery.find({
      deliveryDate: { $gte: start.toISOString(), $lt: end.toISOString() }
    });

    res.json(deliveries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching deliveries" });
  }
});

export default router;
