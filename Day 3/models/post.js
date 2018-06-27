/*
 * YABE - Post model
 */
"use strict";

const mongoose = require('mongoose');

/* Schema */
const postSchema = new mongoose.Schema({
    "title": {
        "type": String
    },
    "body": {
        "type": String
    },
});

/* Model */
const Post = mongoose.model('Post', postSchema);

/* Expose Post */
module.exports = Post;
