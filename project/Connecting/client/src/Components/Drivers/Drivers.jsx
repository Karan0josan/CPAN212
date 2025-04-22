import React, { useState } from "react";
import drivers from "../../assets/drivers.jpeg";
import "./Drivers.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Drivers = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      name: name,
      appointment: selectedDate,
    };

    try {
      const res = await fetch("http://localhost:8000/drivers/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (res.ok) {
        alert("Appointment booked successfully!");
        setShowForm(false);
        setName("");
        setSelectedDate(null);
      } else {
        alert("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <div className="text">
        <div className="text-content">
          <p>
            DRIVERS
            <h1>Deliver with Starling. It’s pretty sweet.</h1>
            Join a fleet of professional drivers who earn a living wage, set their
            own hours, and support local specialty food artisans.
          </p>

        </div>

        <div>
          <img
            style={{
              width: "40vw",
              height: "70vh",
              borderRadius: "20px",
            }}
            src={drivers}
            alt="Drivers"
          />
        </div>
        
      </div>
      <button className="apply-button" onClick={() => setShowForm(!showForm)}>
            Apply Now
          </button>

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Select Date and Time:
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="Pp"
                required
              />
            </label>
            <button type="submit">Book Appointment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Drivers;
