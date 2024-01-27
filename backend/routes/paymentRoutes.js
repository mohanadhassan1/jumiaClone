const express = require("express")
const router = express.Router()

// const {auth} = require("../middlewares/auth")
const { getPayment, postPayment, patchPayment, deletePayment } = require("../controllers/paymentController")

router.route('/').get(getPayment).post(postPayment);
router.route('/:id').patch(patchPayment).delete(deletePayment);

module.exports = router;