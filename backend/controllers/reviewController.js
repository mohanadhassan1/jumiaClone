const fs = require("fs");
const bcrypt = require("bcryptjs");
const ReviewModel = require("../models/reviewModel");

// ================================================== GET ==================================================
const getReview = async (req, res, next) => {
    try {
        let allReviews = await ReviewModel.find({},"rating");
        res.status(200).json({message:"Success",data:allReviews});
    } catch (error) {
        res.status(400).json(error);
    }
}

// ================================================== POST ==================================================
const postReview = async (req, res, next) => {

    let addReview = req.body;

    try {
        // let newReview = await ReviewModel.create({customer_id:req.id, product_id:req.id, rating:addReview.rating, comment:addReview.comment, data:addReview.data});
        let newReview = await ReviewModel.create(addReview);
        res.status(200).json({message:"Success",data:newReview});
    } catch (error) {
        res.status(400).json(error);
    }
}

// ================================================== PATCH ==================================================
const patchReview = async (req, res, next) => {

    let updateReview = req.body;
    let { id } = req.params;

    try {
        const updatedReview = await ReviewModel.findByIdAndUpdate({ _id: id },updateReview);
        res.status(200).json({message:"Success",data:updatedReview})
    } catch (error) {
        res.status(400).json(error)
    }
}

// ================================================== DELETE ==================================================
const deleteReview = async (req, res, next) => {

    let { id } = req.params;

    try {
        const deletedReview = await ReviewModel.findByIdAndDelete( {_id: id});
        res.status(200).json({message:"Success",data:deletedReview})
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {getReview, postReview, patchReview, deleteReview};