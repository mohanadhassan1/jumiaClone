<<<<<<< HEAD

=======
const express = require("express");
const router = express.Router();
const {
  createSubCategory,
  getAllSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  updateCategoryById,
} = require("../controllers/subcategoryController");

router.route("/").post(createSubCategory).get(getAllSubCategory);

router
  .route("/:id")
  .delete(deleteSubCategory)
  .get(getSubCategoryById)
  .patch(updateCategoryById);

module.exports = router;
>>>>>>> 7f77555525c21aecccc977c74f3a51fa0c0214b8
