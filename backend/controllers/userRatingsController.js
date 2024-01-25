const { Rating } = require("../models/userRatingsModel");

const createUserRating = async (req, res) => {
  try {
    const newRating = req.body;
    const ratingCount = await Rating.countDocuments();

    newRating.rating_id = ratingCount + 1;
    // Use await to wait for the promise to resolve
    const createdRating = await Rating.create(newRating);

    // Send a success response back to the client
    res.status(201).json(createdRating);
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error creating rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//return all ratings
const getAllUserRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();

    res.json(ratings);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update by id
const updateUserRatingById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const rating = await Rating.findOne({ rating_id: id });

    if (!rating) {
      return res.json({ error: "Rating not found" });
    }

    const updatedRating = await Rating.findOneAndUpdate(
      { rating_id: id },
      updates,
      { new: true }
    );

    res.json(updatedRating);
  } catch (error) {
    console.error("Error updating rating:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//get by id
const getUserRatingById = async (req, res) => {
  const id = req.params.id;
  try {
    const foundRating = await Rating.findOne({ rating_id: id });
    if (!foundRating) {
      return res.status(400).json("No Rating with that ID");
    }
    res.status(200).json(foundRating);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete by id
const deleteUserRatingById = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedRating = await Rating.findOneAndDelete({
      rating_id: id,
    });

    if (!deletedRating) {
      return res.status(404).json({ error: "Rating not found" });
    }

    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    console.error("Error deleting rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUserRating,
  getAllUserRatings,
  getUserRatingById,
  deleteUserRatingById,
  updateUserRatingById,
};
