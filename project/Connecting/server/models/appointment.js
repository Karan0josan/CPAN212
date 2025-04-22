import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  appointment: {
    type: Date,
    required: true,
  },
});
const Appointment = mongoose.model("Appointment", appointmentSchema);


export default Appointment;

