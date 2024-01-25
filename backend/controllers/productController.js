const { Product } = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const productCount = await Product.countDocuments();

    newProduct.product_id = productCount + 1;

    const createdProduct = await Product.create(newProduct);

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const foundProduct = await Product.findOne({ product_id: id });

    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(foundProduct);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProductById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const product = await Product.findOne({ product_id: id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { product_id: id },
      updates,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Product.findOneAndDelete({
      product_id: id,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
