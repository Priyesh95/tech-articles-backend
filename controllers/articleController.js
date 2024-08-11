const Article = require('../models/Article');
const redisClient = require('../config/redis');

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getArticleById = async (req, res) => {
  const articleId = req.params.id;
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      // Increment view count
      article.views += 1;
      await article.save();

      
      await redisClient.zIncrBy("mostViewedArticlesLatest", 1, articleId, (err, newLikeCount) => {
        if (err) {
          console.error('Redis ZINCRBY error:', err);
        } else {
          console.log(`Article ${articleId} view count incremented to ${newLikeCount}`);
        }
      });
      // // Update Redis
      // await redisClient.zIncrBy('mostViewedArticles', 1, article._id.toString());

      // await redisClient.get('mostViewedArticles', (err, reply) => {
      //   if (err) console.log(err);
      //   console.log(reply);  // Print the value of the key
      // });

      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createArticle = async (req, res) => {
  const { title, content } = req.body;
  try {
    const article = await Article.create({ title, content });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.likeArticle = async (req, res) => {
  const articleId = req.params.id;
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      article.likes += 1;
      await article.save();

      await redisClient.zIncrBy("mostLikedArticlesLatest", 1, articleId, (err, newLikeCount) => {
        if (err) {
          console.error('Redis ZINCRBY error:', err);
        } else {
          console.log(`Article ${articleId} like count incremented to ${newLikeCount}`);
        }
      });
      // // Update Redis
      // await redisClient.zIncrBy('mostLikedArticles', 1, article._id.toString());

      res.json(article);
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
