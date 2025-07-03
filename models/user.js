
const { required, boolean } = require("joi");
const mongoose = require("mongoose");
const passportLM = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


userSchema.post("findOneAndDelete", async function(user) {
    if (user) {


        const Listing = require("./listings.js");
const Review = require("./review.js");

        // Delete all listings owned by this user
        await Listing.deleteMany({owner: user._id});

        // Delete all reviews written by this user
        await Review.deleteMany({owner: user._id});
    }
});


userSchema.plugin(passportLM);



module.exports = mongoose.model("User", userSchema);