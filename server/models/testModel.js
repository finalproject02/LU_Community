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
        password: {
            type: String,
            required: [true, 'Please enter your password'],
            minlength: 8,
            maxlength:8
        },
        roll: {
            type: Number,
            unique: true
        }

    },
    {timestamps: true}

);

const test = mongoose.model('test', testSchema);
export default test