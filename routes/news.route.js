const { Router } = require('express');
const router = Router();
const {newsController} = require('../controllers/news.controller');

 router.post('/create', newsController.postNews);
 router.delete('/:newsId', newsController.deleteNews);
 router.get('/find', newsController.getAllNews);
 router.get('/allnews/:categoriId', newsController.getNewscatigorias );
 router.get('/:newsId', newsController.getFindByID);

module.exports = router