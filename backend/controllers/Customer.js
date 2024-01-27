const CustomerModle = require("../models/Customer");
const asyncHandler = require("express-async-handler");

const getCustomers = asyncHandler(async (req, res, next) => {
  try {
    let findCustomers = await CustomerModle.find();
    res.status(200).json({ deta: findCustomers });
  } catch (err) {
    res.status(400).json(err);
  }
});

const getByCustomerID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  try {
    let Customer = await CustomerModle.findOne({ customer_id: id });
    if (Customer) {
      res.status(200).json(Customer);
    } else {
      res.status(400).json({ message: "not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const AddCustomer = asyncHandler(async (req, res, next) => {
  let Deta = req.body;
  try {
    let newCustomer = await CustomerModle.create(Deta);
    res.status(200).json({ Done: true });
  } catch (e) {
    res.status(400).json(e);
  }
});

const EditCustomer = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let body = req.body;
  try {
    let Customer = await CustomerModle.updateOne({ customer_id: id }, body);
    res.status(200).json({ Done: true });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

const deleteCustomer = asyncHandler(async (req, res, next) => {
  const Id = req.params.id;
  try {
    const Customer = await CustomerModle.findOneAndDelete({ customer_id: Id });
    res.status(200).json(Customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  getCustomers,
  AddCustomer,
  EditCustomer,
  getByCustomerID,
  deleteCustomer,
};
