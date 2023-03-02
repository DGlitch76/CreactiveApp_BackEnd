const { Schema, model } = require("mongoose");



//Model for Photoshoot Project Approval
//Photoshoots have nultiple photo objects
const photoshootProjectSchema = new Schema([
    {
        name: {
            type: String,
            required: true //this value should be the file name by default or input value by creator
        },
        image: {
            type: String,
            required: true 
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
  }
])


  const PhotoshootProject = model("PhotoshooPfoject", photoshootProjectSchema);
  
  module.exports = PhotoshootProject;
