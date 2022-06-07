const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster",
        post_content: "Comming Soon.",
        user_id: 3
    },
    {
        title: "New Iorn Man Movier",
        post_content: "Comming Soon.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler ",
        post_content: "Comming Soon.",
        user_id: 2

    },
    {
        title: "Tech Blog",
        post_content: "Comming Soon.",
        user_id: 5
    },
    {
        title: "Tech News",
        post_content: "Comming Soon.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;