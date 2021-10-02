import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        education: {
            type: Array,
            default: []
        }

    },
    {timestamps: true}

);

const test = mongoose.model('test', testSchema);
export default test