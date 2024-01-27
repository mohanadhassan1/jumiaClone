const fs = require("fs");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const PaymentModel = require("../models/paymentModel");
const ReviwModel = require("../models/reviewModel");

// ================================================== GET ==================================================
const getPayment = asyncHandler(async (req, res, next) => {
  let allPayments = await PaymentModel.find({}, "amount");
  res.status(200).json({ message: "Success", data: allPayments });
});

// ================================================== POST ==================================================
const postPayment = asyncHandler(async (req, res, next) => {
  let addPayment = req.body;

  try {
    let newPayment = await PaymentModel.create(addPayment);
    res.status(200).json({ message: "Success", data: newPayment });
  } catch (error) {
    res.status(400).json(error);
  }
});

// ================================================== PATCH ==================================================
const patchPayment = asyncHandler(async (req, res, next) => {
  let updatePayment = req.body;
  let { id } = req.params;

  try {
    const updatedPayment = await PaymentModel.findByIdAndUpdate(
      { _id: id },
      updatePayment
    );
    res.status(200).json({ message: "Success", data: updatedPayment });
  } catch (error) {
    res.status(400).json(error);
  }
});

// ================================================== DELETE ==================================================
const deletePayment = asyncHandler(async (req, res, next) => {
  let { id } = req.params;

  try {
    const deletedPayment = await PaymentModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Success", data: deletedPayment });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = { getPayment, postPayment, patchPayment, deletePayment };
