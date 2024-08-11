const express = require('express');
const {
  getAllArticles,
  getArticleById,
  createArticle,
  likeArticle,
} = require('../controllers/articleController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getAllArticles).post(protect, createArticle);
router.route('/:id').get(protect, getArticleById);
router.route('/:id/like').post(protect, likeArticle);

module.exports = router;
