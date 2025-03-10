const mongoose = require('mongoose');

const blogEntrySchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    content: {type: String, required: true, unique: true},
    datetime: { type: Date, default: Date.now } // Added default timestamp
});

const BlogEntry = mongoose.model('Blog_Entry', blogEntrySchema);

module.exports = BlogEntry;
