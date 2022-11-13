const { Router } = require('express');

const router = Router();

router.use('/comment',require('./comments.route'))
router.use('/categories',require('./categories.route'));
router.use('/news',require('./news.route'));

module.exports = router;

