const joi = require("joi");

module.exports.listingSchema = joi.object({
    list: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required().min(0),
        image: joi.string().allow("", null),
        moreInfo: joi.string(),
        category: joi.string().required()
    }).required()
});


module.exports.reviewSchema = joi.object({
    review: joi.object({
        comment: joi.string().required(),
        rating: joi.number().required().min(1).max(5),
    }).required(),
});