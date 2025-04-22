import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Admin = () => {
  const [date, setDate] = useState(new Date());
  const [deliveries, setDeliveries] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Protect admin route
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("token");

    if (!token || isAdmin !== "true") {
      alert("Access denied.");
      navigate("/");
    }
  }, []);

  const fetchDeliveries = async () => {
    setLoading(true);
    const selectedDate = date.toISOString().split("T")[0];

    try {
      const [deliveryRes, appointmentRes] = await Promise.all([
        fetch(
          `http://localhost:8000/delivery/admin/deliveries?date=${selectedDate}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        fetch(
          `http://localhost:8000/drivers/appointments?date=${selectedDate}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
      ]);

      const deliveryData = await deliveryRes.json();
      const appointmentData = await appointmentRes.json();

      if (deliveryRes.ok) {
        setDeliveries(deliveryData || []);
      } else {
        alert(deliveryData.message || "Failed to fetch deliveries.");
      }

      if (appointmentRes.ok) {
        setAppointments(appointmentData || []);
      } else {
        alert(appointmentData.message || "Failed to fetch appointments.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Admin Delivery Dashboard</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Select a date:
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </label>
        <button
          onClick={fetchDeliveries}
          style={{
            marginLeft: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Deliveries & Appointments
        </button>
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <h3>Deliveries</h3>
          <ul>
            {deliveries.length > 0 ? (
              deliveries.map((d, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <strong>From:</strong> {d.pickupAddress} <br />
                  <strong>To:</strong> {d.dropoffAddress} <br />
                  <strong>Boxes:</strong> {d.boxes} <br />
                  <strong>Date:</strong>{" "}
                  {new Date(d.deliveryDate).toDateString()} <br />
                  <strong>Contact:</strong> {d.personName} ({d.phoneNumber}){" "}
                  <br />
                  <strong>Email:</strong> {d.email} <br />
                  <strong>Instructions:</strong> {d.instructions}
                </li>
              ))
            ) : (
              <p>No deliveries found for selected date.</p>
            )}
          </ul>

          <h3>Driver Appointments</h3>
          <ul>
            {appointments.length > 0 ? (
              appointments.map((a, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Name:</strong> {a.name} <br />
                  <strong>Appointment Time:</strong>{" "}
                  {new Date(a.appointment).toLocaleString()}
                </li>
              ))
            ) : (
              <p>No appointments found for selected date.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Admin;
