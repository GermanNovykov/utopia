import mongoose from "mongoose";

const CodeBlockSchema = new mongoose.Schema({
    blockName: {
        type: String,
    },
        description: {
            type: String,
        },
    blockField: {
        type: String,
        default: "false"
    }

},
    {
        timestamps: true
    })
export default mongoose.model('CodeBlock', CodeBlockSchema);