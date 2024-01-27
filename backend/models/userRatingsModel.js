const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    rating_id: { type: Number, unique: true, required: true },
    customer_id: {
      type: mongoose.Schema.Types.Number,
      ref: "Customer",
      required: true,
    },
    rated_entity_id: {
      type: mongoose.Schema.Types.Number,
      refPath: "entityModel",
    }, // Assuming Products is the name of your collection
    rating: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    model: { type: String },
    entityModel: { type: String, enum: ["Product", "Vendor"] },
  },
  { collection: "UserRatings" }
);

const Rating = mongoose.model("UserRatings", ratingSchema);

module.exports = { Rating };
