const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listings.js");
const ExpressError = require("../utils/expressError.js");
const {isLoggedin, isOwner, validateListing} = require("../middlewares.js");
const controllers = require("../controllers/listing.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



router
.route("/")
.get(wrapAsync(controllers.index))
.post(  
    isLoggedin,
    upload.single("list[image]"),
    validateListing,  
    wrapAsync(controllers.addNewDestination)
);




//create new route rendering form only
router.get("/new", isLoggedin , (controllers.rendernewDestinationForm));





//show one
router.get("/:id", wrapAsync(controllers.eachDestination));

//update
router.get("/:id/edit", isOwner, isLoggedin, wrapAsync(controllers.renderUpdateDestinationForm));


//updating
router.put("/:id/update", upload.single("list[image]"), validateListing, isOwner,  wrapAsync(controllers.updateDestination));


//delete route
router.delete("/:id/delete", isLoggedin, wrapAsync(controllers.destroyDestination));

module.exports = router;