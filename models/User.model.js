const { Schema, model } = require("mongoose");

const userOptions = [
  'Admin', // not to be included within the signup form
  'Client',
  'Creator',
  'Illustrator',
  'Graphic Designer',
  'Web Designer',
  'Product Designer',
  'UI/UX Designer',
  'Web Developer'
]

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
    //needs review (also same thing in Project.model) -- multiple selection in form possible // maybe backlog feature
    role: {
      type: [String],
      user: [userOptions],
      required: false, //to be set true later
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
        required: false, //to be set true later
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
