const { Schema, model } = require("mongoose");

// User model with access control (check bellow)
const userSchema = new Schema(
  {
    avatar: {
      type: String,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    firstname: {
      type: String,
      trim: true,
      unique: false
    },
    lastname: {
      type: String,
      trim: true,
    },
    role: {
      type: Array,
      trim: true,
    },
    dob: {
      type: Date,
    },
    company: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
      lowercase: false,
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    address: 
      {
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        zip: {
          type: Number,
        },
        country: {
          type: String,
          required: false
        },
      }  
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);


const User = model("User", userSchema);

module.exports = User;
