const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const subcategoryRoute = require("./routes/subcategoryRoute");
const userRatings = require("./routes/userRatingsRoute");
const vendors = require("./routes/vendorsRoute");
const wishlistRoute = require("./routes/wishlistRoute");

mongoose
  .connect(
    "mongodb+srv://jumiaClone:nSzefF4cBgxjkT8V@jumiaclone.fphmp2g.mongodb.net/"
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
