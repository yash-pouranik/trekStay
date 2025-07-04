
const Listing = require("../models/listings.js");
const User = require("../models/user.js");
const Booking = require("../models/booking.js");
const ExpressError = require("../utils/expressError.js");
const { sendBookingMail, sendBookingToOwner } = require("../utils/mailer.js");


module.exports.getBookingForm = async(req, res) => {
    console.log("Booking form rendering")
    let id = req.params.id;
    let userId = req.params.uid;

    const user1 = await User.findById(userId);
    res.render("booking/bookForm", {user1, userId, id});
};

module.exports.book = async(req, res) => {
    console.log("booking in progress");
    let id = req.params.id;
    let userId = req.params.uid;

    let booking = new Booking(req.body.booking);
    booking.bookedBy = userId;
    booking.destination = id;


    let listing = await Listing.findById(id).populate("owner");
    console.log(listing);
    await booking.save();
    await sendBookingMail(req, listing);
    await sendBookingToOwner(req, listing, booking);
    res.redirect(`/listings/${id}`);
}

module.exports.deleteBooking = async(req, res) => {
    const bookingId = req.params.bid;
    const userId = req.params.uid;
    deletedBooking = await Booking.findByIdAndDelete(bookingId);
    console.log(deletedBooking);
    res.redirect(`/user/${userId}`);

}