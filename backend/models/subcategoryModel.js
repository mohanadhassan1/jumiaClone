const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  subcategory_id: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  description: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  // ... other subcategory properties
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = { Subcategory };
