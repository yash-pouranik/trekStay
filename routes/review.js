const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review.js");
const Listing = require("../models/listings.js");
const ExpressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {reviewSchema} = require("../schema.js");
const {isLoggedin, validateReview} = require("../middlewares.js");
const controllers = require("../controllers/review.js")






//posting review
router.post("/", validateReview, isLoggedin, wrapAsync(controllers.postReview));



// delete review
router.delete("/:reviewId", wrapAsync(controllers.destroyReview));

module.exports = router;