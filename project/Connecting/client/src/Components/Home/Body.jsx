import React from "react";
import "./Body.css";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Body = () => {
  return (
    <div className="main-container">
      <h2>Grow from day one.</h2>
      <p>
        Our team of friendly foodies are committed to your success every step of
        the way.
      </p>
      <div className="box">
        <div className="blur-overlay"></div>
        <div className="box-text">
          <div className="box-left">
            <h2>FRESH FOOD MAKERS</h2>
            <h2>Shift to growth mode. </h2>
            <p>
              We've rethought perishable food distribution so you can scale,
              effortlessly. Supply the freshest inventory to all your customers
              on-demand. Access our Local Retailer Network and leverage our team
              to boost your sales.
            </p>
          </div>

          <div className="box-right">
            <br />

            <p>
              <MdKeyboardDoubleArrowRight />
              Reduce distribution costs.
            </p>
            <p>
              <MdKeyboardDoubleArrowRight />
              Improve your customer experience 
            </p>
            <p>
              <MdKeyboardDoubleArrowRight />
              Unlock new sales channels.
            </p>
            <p>
              <MdKeyboardDoubleArrowRight />
              Expand into new markets
            </p>
            <p>
              <MdKeyboardDoubleArrowRight />
              Take back time & do more.
            </p>
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="box-text">
          <div className="box-left">
            <h2 style={{color:"#6a0dad"}}>RETAILERS</h2>
            <h2 style={{color:"#6a0dad"}}>Source only the best.</h2>
            <p style={{color:"black"}}>
              Surprise and delight your customers with the best local specialty
              food products Southern Ontario has to offer from artisan makers
              big and small. We’ll take the legwork out of sourcing local,
              giving you a competitive edge.
            </p>
          </div>

          <div className="box-right">
            <br />

            <p style={{color:"#6a0dad"}}>
              <MdKeyboardDoubleArrowRight />
              Reduce Inventory spoilage.
            </p>
            <p style={{color:"#6a0dad"}}>
              <MdKeyboardDoubleArrowRight />
              Reduce shipping costs.
            </p>
            <p style={{color:"#6a0dad"}}>
              <MdKeyboardDoubleArrowRight />
              Deal direct with local makers.
            </p>
            <p style={{color:"#6a0dad"}}>
              <MdKeyboardDoubleArrowRight />
              Keep up with food trends.
            </p>
            <p style={{color:"#6a0dad"}}>
              <MdKeyboardDoubleArrowRight />
              Discover unique & seasonal product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
