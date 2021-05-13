const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
    quoteFull: {
        type: String,
        required: true
    },
    quoteShort: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        require: true
    },
})

module.exports = mongoose.model("Quote", quoteSchema);