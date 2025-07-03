const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        max: 5,
        min: 1,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    }
});

module.exports = mongoose.model("Review", reviewSchema);