const Joi = require("joi");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    count: {
        type: Number,
        default: 1,
        min: 0
    }
})

const Product = mongoose.model("product", ProductSchema);

const ProductValidator = Joi.object({
    title: Joi.string()
        .min(2)
        .max(100)
        .required(),
    image: Joi.string()
        .pattern(/\.(jpg|jpeg|png|gif|webp)$/i)
        .required()
        .messages({
            'string.pattern.base': 'Image URL must end with .jpg, .jpeg, .png, .gif, or .webp'
        }),
    price: Joi.number()
        .min(0)
        .required(),
    count: Joi.number()
        .integer()
        .min(0)
        .default(1)
})

module.exports = {Product, ProductValidator}