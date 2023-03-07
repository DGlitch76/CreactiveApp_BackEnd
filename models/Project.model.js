const { Schema, model } = require("mongoose");

//Photoshoots have nultiple photo objects
const ProjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true //this value should be the file name by default or input value by creator
        },
        image:[ {
            imgUrl:String,
            name: String,
            } ],
        description: {
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
            enum: ['Public', 'Private'], // radio buttons / select boxes
            required: true,
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
          }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
)


  const Project = model("Project", ProjectSchema);
  
module.exports = Project;