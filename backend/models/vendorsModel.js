// vendorModel.js
const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    vendor_id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    contact_person: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { collection: "Vendor" }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = { Vendor };
