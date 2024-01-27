const cors=require("cors")
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const subcategoryRoute = require("./routes/subcategoryRoute");
const userRatings = require("./routes/userRatingsRoute");
const vendors = require("./routes/vendorsRoute");
const wishlistRoute = require("./routes/wishlistRoute");
const adminsRoutes=require("./routes/adminRoute")
const addressRoutes = require('./routes/addressRoute');
const cartRoutes = require('./routes/cartRoute');
const categoryRoutes = require('./routes/cateogryRoute');




mongoose
  .connect(
    "mongodb+srv://jumiaClone:nSzefF4cBgxjkT8V@jumiaclone.fphmp2g.mongodb.net/Jumia"
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(cors())
app.use(express.json());
app.use('/admins', adminsRoutes)
app.use('/addresses',addressRoutes)

app.use('/cart', cartRoutes);
app.use('/category', categoryRoutes);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

