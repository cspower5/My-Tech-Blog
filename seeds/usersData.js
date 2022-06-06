const { User } = require('../models');

const sampleUser = [{
        username: 'cspower',
        password: 'password'

    },
    {
        username: 'cborer',
        password: 'passwd1'

    },
    {
        username: 's2powell',
        password: 'pwrd2'

    },
];

const userSeeds = () => User.bulkCreate(sampleUser);

module.exports = userSeeds;