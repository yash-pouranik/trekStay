const mongoose = require("mongoose");
const Review = require("./review.js");
const User = require("./user.js");
const { string, required } = require("joi");
const schema = mongoose.Schema;

const listingSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    location: String,
    country: String,
    reviews: [
        {
            type: schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: schema.Types.ObjectId,
        ref: "User",
    },
    moreInfo: String,
    category: {
        type: String,
        enum: ['mountain', 'trending', 'icities', 'pools', 'castle', 'camping', 'farms', 'rooms', 'arctic']
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    }
});

listingSchema.post("findOneAndDelete", async(list1) => {
    if(list1) {
        await Review.deleteMany({_id: {$in: list1.reviews}});
    }
});



module.exports = mongoose.model("Listing", listingSchema);