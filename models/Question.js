import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    codeBlocks: {
        type: Array,
        required: true
    },
    codeFields: {
        type: Array,
        required: true
    },
    correctPattern: {
        type: Array,
        required: true
    }

},
    {
        timestamps: true
    })
export default mongoose.model('Question', QuestionSchema);