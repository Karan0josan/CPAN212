import mongoose from "mongoose";

const deliverySchema = mongoose.Schema({

  companyName: {
    type:String
  },

  personName: {
    type:String
  },

  email:  {
    type:String
  },

  deliveryDate: {
    type: Date,
    required: true,
  },
  boxes: {
    type: Number,
    required: true,
  },
  pickupAddress: {
    type: String,
    required: true,
  },
  dropoffAddress: {
    type: String,
    required: true,
  },
  instructions:{
    type: String,
  },
  phoneNumber:{
    type: String,
    required: false,
  },


});
const Delivery = mongoose.model("delivery", deliverySchema);
export default Delivery;

