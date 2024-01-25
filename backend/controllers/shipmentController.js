const fs = require("fs");
const bcrypt = require("bcryptjs");
const ShipmentModel = require("../models/shipmentModel");

// ================================================== GET ==================================================
const getShipment = async (req, res, next) => {
    try {
        let allShipments = await ShipmentModel.find({},"status");
        res.status(200).json({message:"Success",data:allShipments});
    } catch (error) {
        res.status(400).json(error);
    }
}

// ================================================== POST ==================================================
const postShipment = async (req, res, next) => {

    let addShipment = req.body;

    try {
        // let newShipment = await ShipmentModel.create({order_id:req.id, status:addShipment.status, estimated_delivery_date:addShipment.estimated_delivery_date});
        let newShipment = await ShipmentModel.create(addShipment);
        res.status(200).json({message:"Success",data:newShipment});
    } catch (error) {
        res.status(400).json(error);
    }
}

// ================================================== PATCH ==================================================
const patchShipment = async (req, res, next) => {

    let updateShipment = req.body;
    let { id } = req.params;

    try {
        const updatedShipment = await ShipmentModel.findByIdAndUpdate({ _id: id },updateShipment);
        res.status(200).json({message:"Success",data:updatedShipment})
    } catch (error) {
        res.status(400).json(error)
    }
}

// ================================================== DELETE ==================================================
const deleteShipment = async (req, res, next) => {

    let { id } = req.params;

    try {
        const deletedShipment = await ShipmentModel.findByIdAndDelete({ _id: id });
        res.status(200).json({message:"Success",data:deletedShipment})
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {getShipment, postShipment, patchShipment, deleteShipment};