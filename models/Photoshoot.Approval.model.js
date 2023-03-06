const { Schema, model } = require("mongoose");



//Model for Photoshoot Project Approval
//Photoshoots have nultiple photo objects
const photoshootApprovalSchema = new Schema(
    {
        name: {
            type: String,
            required: true //this value should be the file name by default or input value by creator
        },
        images:[ {
            imgUrl:String,
            name: String,
            localFolder:String,
            isAwaitingApproval: Boolean,
            isApproved: Boolean,
            copies:{
                type: Number,
            },
            print: {
                type: String,
                enum: ['20x30', '40x50', '70x100'],
            }
            } ],
        project: {
                type: Schema.Types.ObjectId,
                ref: 'PhotoshootPfoject',
        },
  }
)


  const PhotoshootApproval = model("PhotoshootApproval", photoshootApprovalSchema);
  
  module.exports = PhotoshootApproval;
