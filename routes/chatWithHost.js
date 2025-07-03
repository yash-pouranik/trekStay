const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedin} = require("../middlewares.js");
const controllers = require("../controllers/chatWithHost.js");


router.get("/inbox", isLoggedin, wrapAsync(controllers.getInbox));

router.get("/inbox/:uid/reciever/:rid", isLoggedin, wrapAsync(controllers.getPersonalChat));

router.post("/inbox/:uid/reciever/:rid", isLoggedin, wrapAsync(controllers.postMessage));


module.exports = router;