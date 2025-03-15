const express = require('express');
const router = express.Router();
const blogEntryModel = require('../models/blog-entry-model');


router.get('/blog', async (req, res) => {
    try {
        const blogEntries = await blogEntryModel.find().sort({ datetime: -1 });;
        console.log(blogEntries);
        res.status(201).json(blogEntries);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
    
}) 

router.post('/blog', async (req, res) => {
    try {
        const blogEntry = {
            title : req.body.title,
            content : req.body.content,
            datetime : req.body.datetime
        };

        console.log(blogEntry);

        const newBlogEntry = blogEntryModel.insertOne(blogEntry);

        return res.status(201).json(newBlogEntry);
    } catch( err ) {
        return res.status(400).json({ error: err.message });
    }
})

module.exports = router;