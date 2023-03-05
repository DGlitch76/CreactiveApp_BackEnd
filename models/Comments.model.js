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
        typeof: Schema.Types.ObjectId,
        ref: 'PhotoshootProject',
    },
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
)


const Comment = model("Comment", commentSchema);

module.exports = Comment;