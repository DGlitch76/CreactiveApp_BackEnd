const { Schema, model } = require("mongoose");



//Model for Photoshoot Project Approval
//Photoshoots have nultiple photo objects
const photoshootProjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true //this value should be the file name by default or input value by creator
        },
        image: {
            type: String, //see how to do this with array (objects wirh image URL, file name and local storage folder)
            required: true 
        },
        client:{
            type: String,// user email or username
            required: false 
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        type: {
            enum: ['Public', 'Private'], // radio buttons / select boxes
            required: true,
        },

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
)


  const PhotoshootProject = model("PhotoshootProject", photoshootProjectSchema);
  
  module.exports = PhotoshootProject;
