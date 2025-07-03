const mongoose = require("mongoose");
const Review = require("./review.js");
const User = require("./user.js");
const { string, required } = require("joi");
const Listings = require("./listings.js");
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    },
    numberOfPeople: {
        type: Number, 
        required: true,
    },
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
    },
    bookedAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Booking", bookingSchema);