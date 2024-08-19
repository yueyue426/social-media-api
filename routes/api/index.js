const router = require('express').Router();
const userRouters = require('./userRoutes');
const thoughtRouters = require('./thoughtRoutes');

router.use('api/user', userRouters);
router.use('api/thoughts', thoughtRouters);