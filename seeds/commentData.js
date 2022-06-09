const { Comment } = require('../models');

const sampleComment = [
{
    "comment": "I prefer relational but need to learn NoSql",
    "date_created": "06/05/2022",
    "user_id": 3,
    "post_id": 1
},
{
    "comment": "javascript is made for stack developing.",
    "date_created": "06/06/2022",
    "user_id": 2,
    "post_id": 2
},
{
    "comment": "Python and data science are like bacon and eggs.",
    "createdate": "06/06/202",
    "user_id": 1,
    "post_id": 3
},

];

const commentSeeds = () => Comment.bulkCreate(sampleComment);

module.exports = commentSeeds;