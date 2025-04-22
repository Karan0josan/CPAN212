import React from "react";
import "./About.css";
import founder from "../../assets/founder.JPG";

const About = () => {
  return (
    <div>
      <div className="about-text">
        <p className="text-content">
          <h1>Hi from Our Founder!</h1>
          At Connecting Miles, we started with a simple idea: make deliveries
          faster, easier, and more reliable. It all began when our founder,
          Karan Josan, was frustrated with slow shipping times and lost packages
          while trying to send a birthday gift to a friend. Determined to change
          the game, Karan Josan built a delivery service that prioritizes speed,
          transparency, and customer satisfaction. What started as a small local
          operation has now grown into a trusted network, delivering packages
          with care and efficiency."Every package tells a story, and we make
          sure it reaches the right hands at the right time." Join us on this
          journey—because deliveries should be as seamless as ordering your
          favorite coffee!
        </p>

        <div>
          <img
            style={{
              // width: "40vw",
              height: "80vh",
              // marginTop: "10px",
              borderRadius: "20px",
              marginRight: "100px"
            }}
            src={founder}
            alt=""
          />
        </div>
      </div>
      <div className="down-box">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify logistics by offering efficient,
          affordable, and customer-focused delivery solutions. We strive to make
          shipping seamless for businesses and individuals, ensuring that every
          package is handled with care.
        </p>
        <h2>Why Choose Us?</h2>
        <p> <span>Fast & Reliable:</span> We guarantee on-time deliveries
        with real-time tracking.</p>
        <p><span>Affordable Pricing:</span> Competitive rates with no
        hidden fees.</p>
        <p><span>Customer-Centric Service:</span> Friendly support and
        seamless user experience.</p>
        <p><span>Eco-Friendly Solutions:</span> Sustainable delivery
        options to reduce environmental impact.</p>
        


        <h2>Our Services</h2>
        <p>
          <span>Same-Day & Express Deliveries: </span> When time is
          critical, we ensure urgent deliveries.
        </p>
        <p>
          <span>Business & E-commerce Solutions: </span> Helping
          businesses fulfill orders with seamless logistics.
        </p>
        <p>
          <span>Return & Reverse Logistics: </span> Hassle-free returns
          for your convenience.
        </p>
      </div>
    </div>
  );
};

export default About;
