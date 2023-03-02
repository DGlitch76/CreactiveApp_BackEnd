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
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    company: {
      type: String,
      trim: true,
      required: false
    },
    dateofbirth: {
      type: Date,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: false
    },

    address: [
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
          required: true
        },
      }
    ]

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);


//This sets up the model for role access control // Check https://www.npmjs.com/package/mongoose-role
//Need to review the access levels --- can they (like bellow) change or must be public, anon, user and admin?

UserSchema.plugin(require('mongoose-role'), {
  role: ['superAdmin', 'admin', 'client', 'photographer', 'illustrator', 'graphic-designer', 'frontend-developer', 'backend-developer', 'ux-ui-designer'],
  accessLevels: {
    guest: [''],
    public: ['superAdmin', 'admin', 'client', 'photographer', 'illustrator', 'graphic-designer', 'frontend-developer', 'backend-developer', 'ux-ui-designer'],
    creator: ['photographer', 'illustrator', 'graphic-designer', 'frontend-developer', 'backend-developer', 'ux-ui-designer'],
    client: ['client'],
    admin: ['superAdmin', 'admin']
  }
})


const User = model("User", userSchema);

module.exports = User;
