const { Subcategory } = require("../models/subcategoryModel");

//create
const createSubCategory = async (req, res) => {
  try {
    const newSubCategory = req.body;
    const subcategoryCount = await Subcategory.countDocuments();

    newSubCategory.subcategory_id = subcategoryCount + 1;
    // Use await to wait for the promise to resolve
    const createdSubCategory = await Subcategory.create(newSubCategory);

    // Send a success response back to the client
    res.status(201).json(createdSubCategory);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error creating subcategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//reurn all subcategory
const getAllSubCategory = async (req, res) => {
  try {
    // const subCategory = await Subcategory.find().populate({
    //   path: "category_id",
    // });

    const subCategory = await Subcategory.find();

    res.json(subCategory);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update by id
const updateCategoryById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    // Find the subcategory by ID
    const subcategory = await Subcategory.findOne({ subcategory_id: id });

    // Check if the subcategory exists
    if (!subcategory) {
      return res.json({ error: "Subcategory not found" });
    }

    // Update the subcategory with the provided data
    const updatedSubcategory = await Subcategory.findOneAndUpdate(
      { subcategory_id: id },
      updates,
      { new: true }
    );

    res.json(updatedSubcategory);
  } catch (error) {
    console.error("Error updating subcategory:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//get all
const getSubCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const foundSubCategory = await Subcategory.findOne({ subcategory_id: id });
    if (!foundSubCategory) {
      return res.status(400).json("No SubCategory with that ID");
    }
    res.status(200).json(foundSubCategory).populate({ path: "category_id" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//del by id
const deleteSubCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedSubCategory = await Subcategory.findOneAndDelete({
      subcategory_id: id,
    });

    if (!deletedSubCategory) {
      return res.status(404).json({ error: "Subcategory not found" });
    }

    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  createSubCategory,
  getAllSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  updateCategoryById,
};
