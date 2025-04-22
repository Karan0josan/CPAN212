import express from "express";
import Appointment from "../models/appointment.js";
import moment from "moment-timezone"; // Import moment-timezone

const router = express.Router();

// POST route to create a new appointment
router.post("/appointment", async (req, res) => {
  const { name, appointment } = req.body;

  if (!name || !appointment) {
    return res.status(400).json({ error: "Name and appointment are required" });
  }

  try {
    // Convert the appointment to Toronto time
    const torontoAppointment = moment.tz(appointment, "America/Toronto").toDate();
    
    const newAppointment = new Appointment({ name, appointment: torontoAppointment });
    await newAppointment.save();
    res.status(201).json({ message: "Appointment saved successfully" });
  } catch (err) {
    console.error("Error saving appointment:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET route to fetch appointments by date
router.get("/appointments", async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: "Date query parameter is required" });
  }

  try {
    // Parse the date in Toronto's timezone
    const startOfDay = moment.tz(date, "America/Toronto").startOf('day').toDate();
    const endOfDay = moment.tz(date, "America/Toronto").endOf('day').toDate();

    // Find appointments within the date range (start and end of the selected day)
    const appointments = await Appointment.find({
      appointment: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    });

    res.status(200).json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
