const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./client/homeRoutes');
const dashRoutes = require('./client/dashRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);

module.exports = router;

