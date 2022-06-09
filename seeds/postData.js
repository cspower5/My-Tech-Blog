const { Post } = require('../models');

const samplePosts = [{
        title: 'NoSql vs relational Database',
        comment: 'Which do you think is better?',
        user_id: 1

    },
    {
        title: 'javascript the choice of stack developers',
        comment: 'The complexity is easy',
        user_id: 2
    },
    {
        title: 'Python for data science',
        comment: 'Fun and easy with csv files',
        user_id: 3
    }
];

const postSeeds = () => Post.bulkCreate(samplePosts);

module.exports = postSeeds;