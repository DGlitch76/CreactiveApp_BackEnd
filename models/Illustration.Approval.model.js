const { Schema, model } = require("mongoose");

const print = ['20x30', '40x50', '70x100']

//Model for Illustration Project Approval
const illustrationApprovalSchema = new Schema([
    {
        name: {
            type: String,
            //required: true //this value should be the file name by default or input value by creator
        },
        image: {
            type: String,
            //required: true
        },
        copies: {
            type: Number,
            required: false
        },
        print: {
            enum: [print],
            required: false
        },
  }
])

const IllustrationApproval = model("IllustrationApproval", illustrationApprovalSchema);
  
module.exports = IllustrationApproval;
