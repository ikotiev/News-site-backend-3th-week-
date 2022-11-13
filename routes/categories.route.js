const { Router } = require('express');
const {categoriesController,} = require('../controllers/categories.controller');

const router = Router();

router.post('/postcategories', categoriesController.postCategory );
router.delete('/:categoryId', categoriesController.deleteCategory );
router.get('/allcat', categoriesController.getAllCategory );


module.exports = router;
