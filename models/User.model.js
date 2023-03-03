const { Schema, model } = require("mongoose");

// User model with access control (check bellow)
const userSchema = new Schema(
  {
    avatar: {
      type: String,
      required: false
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
      required: true,
      unique: false
    },
    lastname: {
      type: String,
      trim: true,
      required: false
    },
    role: {
      type: Array,
      trim: true,
      required: true
    },
    dob: {
      type: Date,
      required: false,
    },
    company: {
      type: String,
      trim: true,
      required: false
    },
    phone: {
      type: Number,
      required: false
    },
    email: {
      type: String,
      required: true,
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
          required: false
        },
        city: {
          type: String,
          required: false
        },
        state: {
          type: String,
          required: false
        },
        zip: {
          type: Number,
          required: false
        },
        country: {
          type: Number,
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
