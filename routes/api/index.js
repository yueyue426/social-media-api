const router = require('express').Router();
const userRouters = require('./userRoutes');
const thoughtRouters = require('./thoughtRoutes');

router.use('/user', userRouters);
router.use('/thoughts', thoughtRouters);

module.exports = router;