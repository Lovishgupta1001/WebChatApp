

import mongoose from "mongoose";

const ConversatioSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }
},
    {
        timestamps: true
    }
);

const conversation = mongoose.model('Conversation', ConversatioSchema);
export default conversation;