const { Router } = require('express');
const {commentController} = require('../controllers/comment.control');

const router = Router();

router.post('/post', commentController.postCommet );
router.delete('/:commentId', commentController.deleteComment);
router.get('/allcomment/:newsId', commentController.getAllCommentByIdcat );
router.patch('/',  );

module.exports = router;
