import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    completed: {
        type: Array,
        default: []
    },
    currentAssignment: {
        type: String,
        default: "64614b5eece343ab88529e14"
    }
},
    {
        timestamps: true,
    },
)
export default mongoose.model('User', UserSchema);