const router = require('express').Router();
const homiesRoutes = require('./homies')
const purchaseRoutes = require('./purchases')

router.use('/homies',homiesRoutes)
router.use('/purchases',purchaseRoutes)





module.exports = router;
