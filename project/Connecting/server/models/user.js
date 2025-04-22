import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        personName:{
            type: String,
            required: true,
        },
        companyName:{
            type:String,
        },
        phoneNumber:{
            type: String,
        },
          createdAt: {
            type: Date,
            default: Date.now,
          },
          isAdmin: {
            type: Boolean,
             default: false 
           },
    }
);

const User = mongoose.model("users", userSchema);

export default User;