const { Comment } = require('../models');

const sampleComment = [{
       body: 'NoSql vs relational Database'

    },
    {
        body: 'javascript the choice of stack developers'

    },
    {
        body:'Python for data science'

    }
];

const commentSeeds = () => Comment.bulkCreate(sampleComment);

module.exports = commentSeeds;