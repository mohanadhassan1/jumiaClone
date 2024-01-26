const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const subcategoryRoutes = require("./routes/subcategoryRoute");
const userRatingsRoutes = require("./routes/userRatingsRoute");
const vendorsRoutes = require("./routes/vendorsRoute");
const wishlistRoutes = require("./routes/wishlistRoute");
const productRoutes = require("./routes/productRoute");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/product", productRoutes);
app.use("/subcategory", subcategoryRoutes);
app.use("/rating", userRatingsRoutes);
app.use("/vendor", vendorsRoutes);
app.use("/wishlist", wishlistRoutes);

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${port}`
  );
});
