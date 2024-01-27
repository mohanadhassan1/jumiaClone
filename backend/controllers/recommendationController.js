const fs = require("fs");
const bcrypt = require("bcryptjs");
const RecommendationModel = require("../models/recommendationModel");

// ================================================== GET ==================================================
const getRecommendation = async (req, res, next) => {
    try {
        let allRecommendations = await RecommendationModel.find({},"recommended_products");
        res.status(200).json({message:"Success",data:allRecommendations});
    } catch (error) {
        res.status(400).json(error);
    }
}

// ================================================== POST ==================================================
const postRecommendation = async (req, res, next) => {

    let addRecommendation = req.body;

    try {
        // let newRecommendation = await RecommendationModel.create({customer_id:req.id, recommended_products:addRecommendation.recommended_products});
        let newRecommendation = await RecommendationModel.create(addRecommendation);
        res.status(200).json({message:"Success",data:newRecommendation});
    } catch (error) {
        res.status(400).json(error);
    }
}

// ================================================== PATCH ==================================================
const patchRecommendation = async (req, res, next) => {

    let updateRecommendation = req.body;
    let { id } = req.params;

    try {
        const updatedRecommendation = await RecommendationModel.findByIdAndUpdate({ _id: id },updateRecommendation);
        res.status(200).json({message:"Success",data:updatedRecommendation})
    } catch (error) {
        res.status(400).json(error)
    }
}

// ================================================== DELETE ==================================================
const deleteRecommendation = async (req, res, next) => {

    let { id } = req.params;

    try {
        const deletedRecommendation = await RecommendationModel.findByIdAndDelete({ _id: id });
        res.status(200).json({message:"Success",data:deletedRecommendation})
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {getRecommendation, postRecommendation, patchRecommendation, deleteRecommendation};