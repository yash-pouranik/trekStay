if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const Review = require("./models/review.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const {listingSchema, reviewSchema} = require("./schema.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const session = require("express-session");
const MongoStore = require("connect-mongo");

const flash = require("connect-flash");



const listingRoute = require("./routes/listings.js")
const reviewRoute = require("./routes/review.js");
const userRoute = require("./routes/user.js");
const bookingRoute = require("./routes/booking.js");
const chat = require("./routes/chatWithHost.js");

const { isLoggedin } = require("./middlewares.js");


const dbUrl = "mongodb://127.0.0.1:27017/trekstay";

async function main() {
    await mongoose.connect(dbUrl);
}

main()
.then((r) => {
    console.log("Connecton to DB Done");
})
.catch((e) => {
    console.log("Connection to DB Failed");
});


app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//body parser
app.use(express.urlencoded({ extended: true }));
//setting up method-override
app.use(methodOverride("_method"));
//ejs mate
app.engine("ejs", ejsMate);



//mongo store
const store = MongoStore.create(
    {
        mongoUrl: dbUrl,
        crypto: {
            secret: process.env.SECRET
        },
        touchAfter: 24 * 3600,
    }
);

store.on("error", () => {
    console.log("Error in Mongo Session", err);
})


const sessionOpts = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
    }
};



app.use(session(sessionOpts));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.nfound = req.flash("nfound");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    if(req.user && (req.user.isAdmin === true)){
        res.locals.admin = true;
    } else {
        res.locals.admin = false;
    }

    res.locals.currPath = req.path;
    console.log(res.locals.currPath)
    next();
})

app.use("/listings", listingRoute);
app.use("/listings/:id/review", reviewRoute);
app.use("/", userRoute);
app.use("/listings", bookingRoute);
app.use("/", chat);



app.get('/robots.txt', (req, res) => {
  res.status(200).send('User-agent: *\nDisallow:');
});




app.get("/", isLoggedin, (req, res) => {
    console.log("/");
    res.redirect("listings")
});

app.get("/trekstay/privacy", (req, res) => {
    res.render("navLinks/privacy");
});


//page not found
 app.all("*", (req, res, next) => {
    console.log("Not found wala err")
    
    console.log('Path:', req.path);
    next(new ExpressError(404, "Page Not Found"));
 })

//error handle middlewares
app.use((err, req, res, next) => {
    let {status = 500, message} = err;
    let ename = err.name;
    console.log("Some issue:", err.name);
    console.log(err);
    
    res.status(status).render("errorHH/e1", {err});
});



app.listen(5000, () => {
    console.log("App is listning on port 5000");
});