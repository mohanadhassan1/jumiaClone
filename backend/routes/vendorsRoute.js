const express = require("express");
const router = express.Router();
const {
  createVendor,
  getAllVendors,
  getVendorById,
  deleteVendorById,
  updateVendorById,
} = require("../controllers/vendorsController");

router.route("/").get(getAllVendors).post(createVendor);

router
  .route("/:id")
  .get(getVendorById)
  .delete(deleteVendorById)
  .patch(updateVendorById);

module.exports = router;
