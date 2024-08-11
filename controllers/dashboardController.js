const Article = require('../models/Article');
const redisClient = require('../config/redis');

exports.getDashboardData = async (req, res) => {
  try {
    // Fetch most viewed articles from Redis
    const mostViewedIds = await redisClient.zRange('mostViewedArticlesLatest', 0, 20);
    const mostViewedArticles = await Article.find({
      _id: { $in: mostViewedIds }
    }).sort({ views: -1 });

    // Fetch most liked articles from Redis
    const mostLikedIds = await redisClient.zRange('mostLikedArticles', 0, 4);
    const mostLikedArticles = await Article.find({
      _id: { $in: mostLikedIds }
    }).sort({ likes: -1 });

    res.json({
      mostViewed: mostViewedArticles,
      mostLiked: mostLikedArticles,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
