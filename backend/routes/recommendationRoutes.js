const express = require("express")
const router = express.Router()

// const {auth} = require("../middlewares/auth")
const { getRecommendation, postRecommendation, patchRecommendation, deleteRecommendation } = require("../controllers/recommendationController")

router.route('/').get(getRecommendation).post(postRecommendation);
router.route('/:id').patch(patchRecommendation).delete(deleteRecommendation);

module.exports = router;