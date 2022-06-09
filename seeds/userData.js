const { User } = require('../models');

const sampleUser = [{
        username: 'cspower',
        email: 'csp@gmail.com',
        password: 'password'

    },
    {
        username: 'cborer',
        email: 'cb@gmail.com',
        password: 'passwd1'

    },
    {
        username: 's2powell',
        email: 's2powell@gmail.com',
        password: 'pwrd2'

    },
];

const userSeeds = () => User.bulkCreate(sampleUser);

module.exports = userSeeds;