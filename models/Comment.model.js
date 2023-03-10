const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // each comment can only relate to one project
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
    },
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
)


const Comment = model("Comment", commentSchema);

module.exports = Comment;