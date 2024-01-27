const express = require("express")
const router = express.Router()

// const {auth} = require("../middlewares/auth")
const { getReview, postReview, patchReview, deleteReview } = require("../controllers/reviewController")

router.route('/').get(getReview).post(postReview);
router.route('/:id').patch(patchReview).delete(deleteReview);

module.exports = router;