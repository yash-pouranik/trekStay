const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedin, isOwner, validateListing} = require("../middlewares.js");
const controllers = require("../controllers/booking.js")


router.get("/:id/book/:uid", isLoggedin, wrapAsync(controllers.getBookingForm));

router.post("/:id/booking/:uid", isLoggedin, wrapAsync(controllers.book));

router.delete("/:uid/booking/:bid/delete", wrapAsync(controllers.deleteBooking));


module.exports = router;