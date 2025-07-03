const _ = require("passport-local-mongoose");
const Listing = require("../models/listings.js");
const User = require("../models/user.js");
const ExpressError = require("../utils/expressError.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient  = mbxGeocoding({accessToken: mapToken});





module.exports.index = async (req, res) => {
    let ctgry = req.query.category;
    let query = req.query.q;
    console.log("/listing");
    console.log(req.query);
    let w = "yash";
    let errorMsg = false;
    
    let listings = [];

    // category: username
    if(ctgry === 'username'){
        const user = await User.findOne({ username: query });
        if (user){
            listings = await Listing.find({ owner: user._id });
            if(listings.length !== 0){
                return res.render("listings/home", { listings, w, errorMsg  });
            }
        }
        errorMsg = "Destination not found!";
    }

    // category: city
    else if(ctgry === 'city'){
        listings = await Listing.find({ location: query });
        if(listings.length !== 0){
            return res.render("listings/home", { listings, w, errorMsg  });
        }
        errorMsg = "Destination not found!";
    }

    // category: country
    else if(ctgry === 'country'){
        listings = await Listing.find({ country: query });
        if(listings.length !== 0){
            return res.render("listings/home", { listings, w, errorMsg  });
        }
        errorMsg = "Destination not found!";
    }

    // category: title
    else if(ctgry === 'title'){
        listings = await Listing.find({ title: query });
        if(listings.length !== 0){
           return res.render("listings/home", { listings, w, errorMsg  });
        }   
        errorMsg = "Destination not found!";
    }
    else if(query){
        listings = await Listing.find({ category: query });
        if(listings.length !== 0){
           return res.render("listings/home", { listings, w, errorMsg  });
        }   
        w = query;
        errorMsg = "Destination not found!";
    }

    // default: return all listings
    listings = await Listing.find({});
    res.render("listings/home", { listings, w, errorMsg });
};





module.exports.rendernewDestinationForm = (req, res) => {
    console.log("/create new by", req.user.username);
    const categories = ['mountain', 'trending', 'icities', 'pools', 'castle', 'camping', 'farms', 'rooms', 'arctic'];
    res.render("listings/createForm", {categories});
};



module.exports.addNewDestination = async (req, res, next) => {


    let response = await geocodingClient
    .forwardGeocode({
        query: req.body.list.location,
        limit: 1,
    })
    .send();
    console.log(response.body.features[0].geometry.coordinates);
    const coordinates = response.body.features[0].geometry.coordinates;


    if(req.file) {
            const url = req.file.path;
            const filename = req.file.filename;
            console.log("/post/listings", filename);
            const nList = new Listing(req.body.list);
            nList.owner = req.user._id;
            nList.image = {url, filename}
            nList.geometry = response.body.features[0].geometry;
            let savedL = await nList.save();
            console.log("Added by: ", req.user.username)
            console.log(savedL);
            req.flash("success", "New Destination Created")
            res.redirect("/listings");
    } else{
        req.flash("error", "Image Not Added")
        res.redirect("/listings/new");
    }
};

module.exports.eachDestination = async (req, res) => {
    console.log("/listings/id");
    const id = req.params.id;
    
    const oneList = await Listing.findById(id)
        .populate("owner")
        .populate({
        path: "reviews",
        populate: {
            path: "owner",
            model: "User"
        }
    });

    if(!oneList) {
        req.flash("nfound", "That Destination doesn't exist");
        res.redirect("/listings");
    }
    console.log(oneList.title);
    res.render("listings/show", {oneList});
};

module.exports.renderUpdateDestinationForm = async (req, res) => {
    console.log("/edit form");
    const categories = ['mountain', 'trending', 'icities', 'pools', 'castle', 'camping', 'farms', 'rooms', 'arctic'];
    let id = req.params.id;
    const list = await Listing.findById(id);
    if(!list) {
        req.flash("nfound", "Destination Not Found");
        return res.redirect("/listings");
    }
    originalImgUrl = list.image.url;
    originalImgUrl = originalImgUrl.replace("/upload", "/upload/h_150,w_150");
    res.render("listings/update", {list, originalImgUrl, categories});
}


module.exports.updateDestination = async (req, res) => {
    console.log("/update");

    let response = await geocodingClient
    .forwardGeocode({
        query: req.body.list.location,
        limit: 1,
    })
    .send();
    console.log(response.body.features[0].geometry.coordinates);
    const coordinates = response.body.features[0].geometry.coordinates;

    let id = req.params.id;

    const list = new Listing(req.body.list);
    req.body.list.geometry = response.body.features[0].geometry;
    
    console.log(list);

    let destination = await Listing.findByIdAndUpdate(
        id,
        {
            ...req.body.list
        },
        {
            runValidators: true
        }
    );
    if (req.file) {
        const url = req.file.path;
        const filename = req.file.filename;

        destination.image = { url, filename };
        await destination.save();
    }

    console.log("Updated by:", req.user.username);
    req.flash("success", "Updated");
    res.redirect(`/listings/${id}`);
}



module.exports.destroyDestination = async(req, res) => {
    console.log("/delete");
    const id = req.params.id;
    const dltd = await Listing.findByIdAndDelete(id)
            const deletedList = dltd;
            // res.status(200).json({ redirect: "/listings" });
            req.flash("success", "Destination Deleted")
            res.redirect("/listings");
            console.log(deletedList);
            console.log("Deleted by: ", req.user.username);
};