var express = require('express');
const resourceRouter = require('./resources');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    service_name:process.env.SERVICE,
    version:'0'
  })
});

router.use('/resource',resourceRouter);

module.exports = router;
