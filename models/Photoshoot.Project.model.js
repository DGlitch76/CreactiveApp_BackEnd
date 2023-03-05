const { Schema, model } = require("mongoose");

//Model for Photoshoot Project Approval
//Photoshoots have nultiple photo objects
const photoshootProjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true, //this value should be the file name by default or input value by creator
        },
        images:[ {
            imgUrl:String,
            name: String,
            localFolder:String,
            isAwaitingApproval: Boolean,
            isApproved: Boolean,
            required:true} ],
        description: {
            type: String, 
        },
        hashtags: {
            type: String, 
        },
        hashtags: {
            type: String, 
        },
        client:{
            type: Schema.Types.ObjectId, //form option to be used by the creator (project don't need a client or it can be set by the project creator)
            ref: 'User',
        },
        owner: {
            type: Schema.Types.ObjectId, //code in create project to set the owner
            ref: 'User',
        },
        type: {
            type: String,
            enum: ['Public','Private'], // radio buttons / select boxes
            required: true,
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment',
          }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true,
  }
)


  const PhotoshootProject = model("PhotoshootProject", photoshootProjectSchema);
  
  module.exports = PhotoshootProject;
