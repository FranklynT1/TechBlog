const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is awsome!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, nice work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! Thanks to everyone who contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subs! Finominal!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is amazing news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of the most awaited feature. Good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "A very cool tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;