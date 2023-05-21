import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    questionList: {
        type: Array,
        required: true
    }

},
    {
        timestamps: true
    })
export default mongoose.model('Assignment', AssignmentSchema);