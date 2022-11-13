const Category = require('../models/Category.model');

const News = require('../models/News.model');



module.exports.newsController = {
    postNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category
        }).then((news) => {
            res.json(news)
        })
    },
    deleteNews: (req, res) => {
        News.findByIdAndDelete(req.params.newsId).then(() => {
            res.json('Новость удалена')
        })
    },
    getAllNews: (req, res) => {
        News.find({}).then((news) => {
            res.json(news)
        })
    },
    getNewscatigorias: (req, res) => {
        News.find({category: req.params.categoriId},{}).then((news) => {
            res.json(news)
        })
    },
    getFindByID: (req, res) => {
        News.findById(req.params.newsId).then((news) => {
            res.json(news)
        })
    },

}
