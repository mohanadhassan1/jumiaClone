const { Vendor } = require("../models/vendorsModel");

const createVendor = async (req, res) => {
  try {
    const newVendor = req.body;
    const vendorCount = await Vendor.countDocuments();

    newVendor.vendor_id = vendorCount + 1;

    const createdVendor = await Vendor.create(newVendor);

    res.status(201).json(createdVendor);
  } catch (error) {
    console.error("Error creating vendor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();

    res.json(vendors);
  } catch (error) {
    console.error("Error fetching vendors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateVendorById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const vendor = await Vendor.findOne({ vendor_id: id });

    if (!vendor) {
      return res.json({ error: "Vendor not found" });
    }

    const updatedVendor = await Vendor.findOneAndUpdate(
      { vendor_id: id },
      updates,
      { new: true }
    );

    res.json(updatedVendor);
  } catch (error) {
    console.error("Error updating vendor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getVendorById = async (req, res) => {
  const id = req.params.id;
  try {
    const foundVendor = await Vendor.findOne({ vendor_id: id });
    if (!foundVendor) {
      return res.status(400).json("No Vendor with that ID");
    }
    res.status(200).json(foundVendor);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteVendorById = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedVendor = await Vendor.findOneAndDelete({
      vendor_id: id,
    });

    if (!deletedVendor) {
      return res.status(404).json({ error: "Vendor not found" });
    }

    res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (error) {
    console.error("Error deleting vendor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createVendor,
  getAllVendors,
  updateVendorById,
  getVendorById,
  deleteVendorById,
};
