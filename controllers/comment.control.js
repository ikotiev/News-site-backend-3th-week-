const Comment = require('../models/Commentaries.model');

module.exports.commentController = {
    postCommet: (req, res) => {
        Comment.create({
            name: req.body.name,
            text: req.body.text,
            news: req.body.news

       }).then((comment) => {
            res.json(comment)
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.commentId).then(() => {
            res.json('Комментарий удален!')
        })
    },
    getAllCommentByIdcat: (req, res) => {
        Comment.find({news: req.params.newsId}, {}).then((news) => {
            res.json(news)
        })
    }
    
}