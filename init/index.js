const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listings.js");
const mongoUrl = "mongodb://127.0.0.1:27017/trekstay";
async function main() {
    await mongoose.connect(mongoUrl);
}

main()
.then((r) => {
    console.log("Connecton to DB Done");
})
.catch((e) => {
    console.log("Connection to DB Failed");
});

const init = async () => {
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
};

init();