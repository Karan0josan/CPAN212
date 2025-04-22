import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";






const libraries = ["places"];
const mapContainerStyle = {
  height: "0px", // No visible map, just using Places Autocomplete
  width: "0px",
};

const User = () => {
  
  const location = useLocation();
  const { companyName, personName, email } = location.state || {};

  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState(new Date());
  const [boxes, setBoxes] = useState(1);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [instructions, setInstructions] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [pickupAutocomplete, setPickupAutocomplete] = useState(null);
  const [dropoffAutocomplete, setDropoffAutocomplete] = useState(null);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  console.log("Google Maps API Key:", googleMapsApiKey);

  const handlePickupPlaceChanged = () => {
    if (pickupAutocomplete !== null) {
      const place = pickupAutocomplete.getPlace();
      setPickup(place.formatted_address || "");
    }
  };

  const handleDropoffPlaceChanged = () => {
    if (dropoffAutocomplete !== null) {
      const place = dropoffAutocomplete.getPlace();
      setDropoff(place.formatted_address || "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      date: date.toISOString(),
      boxes,
      pickup,
      dropoff,
      companyName,
      personName,
      email,
      instructions,
      phoneNumber
    };

    try {
      const res = await fetch("http://localhost:8000/delivery/booked", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Delivery booked successfully!");
        setShowForm(false);
      } else {
        alert(data.message || "Failed to book delivery.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <LoadScript
    
      googleMapsApiKey= {googleMapsApiKey}
      libraries={libraries}
    >
      <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        <p>Welcome, <span style={{fontWeight: "bold"}}> {companyName}!</span></p>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: "0.5rem 1rem",
            margin: "1rem 0",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showForm ? "Cancel Booking" : "Book Delivery"}
        </button>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              background: "#f4f4f4",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <label>
              Select Delivery Date:
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="MMMM d, yyyy"
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                placeholder="Enter the phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
             
              />
            </label>

            <label>
              Number of Boxes:
              <input
                type="number"
                min="1"
                value={boxes}
                onChange={(e) => setBoxes(e.target.value)}
                required
              />
            </label>

            <label>
              Pickup Address:
              <Autocomplete
                onLoad={(autocomplete) => setPickupAutocomplete(autocomplete)}
                onPlaceChanged={handlePickupPlaceChanged}
              >
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                />
              </Autocomplete>
            </label>

            <label>
              Drop-off Address:
              <Autocomplete
                onLoad={(autocomplete) => setDropoffAutocomplete(autocomplete)}
                onPlaceChanged={handleDropoffPlaceChanged}
              >
                <input
                  type="text"
                  placeholder="Enter drop-off location"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  required
                />
              </Autocomplete>
            </label>

            <label>
              Special Instructions:

                <input
                  type="text"
                  placeholder="Enter Special instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  required
                />

            </label>

            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm Delivery
            </button>
          </form>
        )}

        {/* Invisible map just to initialize Google script */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: 0, lng: 0 }}
          zoom={1}
        />
      </div>
    </LoadScript>
  );
};

export default User;
