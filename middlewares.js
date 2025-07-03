const Listing = require("./models/listings.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/expressError.js");


module.exports.isLoggedin = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirect = req.originalUrl;
        console.log(req.path)
        console.log("Not logged in!");
        req.flash("error", "you must be logged in.");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next)  => {
    if(req.session.redirect) {
        res.locals.redirectUrl = req.session.redirect
    }
    next();
};

module.exports.isOwner = async(req, res, next) => {
    let id = req.params.id;
    const updatedList = await Listing.findById(id);
    if(res.locals.currUser) {
        if(!updatedList.owner._id.equals(res.locals.currUser._id) && !res.locals.admin) {
        req.flash("error", "You don't have access to edit!");
        res.redirect(`/listings/${id}`);
    }}
    next();
}


module.exports.isUserOwner = async (req, res, next) => {
    const id = req.params.id;

    const adminIds = [
        "684b2b5724267d39ccd43085",
        "684b3793e03810953660202c",
        "684c64644b85db4b250ff726"
    ];

    if (
        res.locals.admin ||
        (req.user && req.user._id.toString() === id.toString())
    ) {
        return next();
    }

    req.flash("error", "You are not authorized");
    res.redirect("/listings");
};




//joi validate Listing
module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
        console.log((error));
        if(error){
            console.log("joi catched error", error.details[0].message);
            const eObj = new ExpressError(400, error.details[0].message);4
            eObj.name = "ValidationError";
            throw eObj;
        } else{
            next();
        }
};

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
        console.log((error));
        if(error){
            console.log("joi catched error", error.details[0].message);
            const eObj = new ExpressError(400, error.details[0].message);4
            eObj.name = "ValidationError";
            throw eObj;
        } else{
            next();
        }
};


module.exports.isAdmin = (req, res, next) => {

    console.log("Logged-in user name:", req.user.username);

    if (res.locals.admin) {
        return next();
    }

    req.flash("error", "You are not authorized!");
    res.redirect("/listings");
};
