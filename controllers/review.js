const Review = require("../models/review.js");
const Listing = require("../models/listings.js");
const ExpressError = require("../utils/expressError.js");


module.exports.postReview = async(req, res, next) => {
    console.log("/review/add");
    let list1 = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.owner = req.user._id;
    list1.reviews.push(newReview);

    await newReview.save();
    await list1.save();
    req.flash("success", "Your Review added.");
    res.redirect(`/listings/${req.params.id}`);
};


module.exports.destroyReview = async(req, res) => {
    console.log("/review/delete");    
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
};