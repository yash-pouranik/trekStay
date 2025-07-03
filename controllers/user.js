const User = require("../models/user");
const nodemailer = require("nodemailer");
const { sendWelcomeMail } = require("../utils/mailer");

module.exports.signupForm = (req, res) => {
    res.render("users/signup");
};

module.exports.signup = async(req, res) => {
    try{
        let {username, email, password} = req.body;
        const newuser = new User({email, username});
        let rUser = await User.register(newuser, password);
        console.log("User registered named: ", rUser);
        req.login(rUser, async(err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to trekStay!");

            await sendWelcomeMail(req);

            res.redirect("/listings");  
        })
    } catch(e) {
        console.log("not signed up", e);
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.loginForm = (req, res) => {
    if(req.user) {
        req.flash("error", "you are already logged in!")
        res.redirect("back");
    } else{
        console.log("trying login on the form");
        res.render("users/login");
    }

};

module.exports.login = async(req, res) => {
        req.flash("success", "Welcome back! you are logged in");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        console.log(redirectUrl)
        res.redirect(redirectUrl);
    };

module.exports.logout = (req,res,next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Logged out Successfully!")
        res.redirect("/listings");
    })
}

module.exports.dashboard = async (req, res) => {
    const Listing = require("../models/listings.js");
    const Review = require("../models/review.js");
    const Booking = require("../models/booking.js");



    console.log("requesting user/id = ", req.params.id);
    let id = req.params.id;

    let u = await User.findById(id);
    //bookings
    let bookings = await Booking.find({bookedBy: id}).populate("destination");;

    // Get user's reviews and listings
    const reviews = await Review.find({ owner: u._id });
    const destinations = await Listing.find({ owner: u._id });

    //booked destinations
    let bookedDestinations = bookings.map(booking => booking.destination);


    const reviewIds = reviews.map(r => r._id);

    // Find listings where these reviews appear
    const listingsWithUserReviews = await Listing.find({
        reviews: { $in: reviewIds }
    });

    // Build map of reviewId -> listingId
    const reviewToListingMap = {};
    listingsWithUserReviews.forEach(listing => {
        listing.reviews.forEach(reviewId => {
            if (reviewIds.find(id => id.equals(reviewId))) {
                reviewToListingMap[reviewId.toString()] = listing._id.toString();
            }
        });
    });

    // Final user object to pass to EJS
    const user = {
        info: u,
        destinations,
        review: reviews,
        reviewToListingMap
    };
    console.log(bookings);

    console.log(user.reviewToListingMap);
    console.log(user);
    res.render("users/dashboard", { user, bookings, bookedDestinations});
}

module.exports.manageUsers = async(req, res) => {
    const listings = await User.find({});
    req.flash("success", "Hey Bro!");
    res.render("admin/users.ejs", {listings});
};

module.exports.editUserForm = async(req, res) => {
    console.log("user edit");
    const user1 = await User.findById(req.params.id);
    res.render("admin/userEditForm.ejs", {user1});
}

module.exports.updateUserInfo = async(req, res) => {
    const id = req.params.id;
    
    const user1 = await User.findByIdAndUpdate(
            id,
            {
                ...req.body.user
            },
            {
                runValidators: true
            }
        );
        res.redirect(`/admin/${req.user._id}`);
};

module.exports.deleteUser = async(req, res) => {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);
            req.flash("success", "User Deleted")
            res.redirect(`/admin/${req.user._id}`);
            console.log(user);
            console.log("Deleted by: ", req.user.username);
}