const { Schema, model } = require("mongoose");

const categories = [
    'Illustration',
    'Graphic Design',
    'Web Design',
    'Product Design',
    'UI/UX Design',
    'Web Development',

]

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        images: [{
            imgUrl: String,
            name: String,
        }],
        description: {
            type: String,
        },
        hashtags: {
            type: String,
        },
        category: {
            type: String,
            industry: [categories], // selection of categories in the form (multiple selection possible)
            required: true,
        },
        //form option to be used by the creator (project don't need a client or it can be set by the project creator - multiple clients possible)
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        owner: {
            type: Schema.Types.ObjectId, //code in create project to set the one owner
            ref: 'User',
        },
        //project can have an owner and several collaborators // backlog feature in the frontend
        collab: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        type: {
            type: String,
            enum: ['Public', 'Private'], // radio buttons / select boxes
            required: true,
        },
        comments: [String],
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true,
    }
)


const Project = model("Project", projectSchema);

module.exports = Project;
