const { Schema, model } = require("mongoose");

const print = ['20x30', '40x50', '70x100']

//Model for Illustration Project Approval
const illustrationApprovalSchema = new Schema(
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
                required: false
            },
            print: {
                enum: [print],
                required: false
            }
            } ],

        project: {
                type: Schema.Types.ObjectId,
                ref: 'PhotoshootPfoject',
        },
  }
)



const IllustrationApproval = model("IllustrationApproval", illustrationApprovalSchema);
  
module.exports = IllustrationApproval;