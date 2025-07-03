const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const controller = require("../controllers/user.js")
const {isLoggedin, isOwner, isUserOwner} = require("../middlewares.js");
const {isAdmin} = require("../middlewares.js");





router
    .route("/signup")
    .get(wrapAsync(controller.signupForm))
    .post(wrapAsync(controller.signup));


router.get("/login", wrapAsync(controller.loginForm));


router.post(
    "/login", 
    passport.authenticate(
        "local",
        {
            failureRedirect: "/login",
            failureFlash: true,
        }
    ), 
    wrapAsync(controller.login)
)


router.get("/logout", (controller.logout));

//dashboard
router.get("/user/:id", isLoggedin, isUserOwner, wrapAsync(controller.dashboard));


router.get("/admin/:id", isLoggedin, isAdmin, wrapAsync(controller.manageUsers));


router.get("/admin/edit/:id", isLoggedin, isAdmin, wrapAsync(controller.editUserForm));


router.put("/admin/update/:id", isLoggedin, isAdmin, wrapAsync(controller.updateUserInfo));


router.delete("/admin/delete/:id", isLoggedin, isAdmin, wrapAsync(controller.deleteUser));


module.exports = router;