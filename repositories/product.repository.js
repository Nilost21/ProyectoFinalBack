import Product from '../db/models/products.model.js';

const getAll = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(`Error getting all products: ${error.message}`);
  }
};

const getById = async (Id) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }
    return product;
  } catch (error) {
    throw new Error(`Error getting product by ID: ${error.message}`);
  }
};

const getByName = async (name) => {
  try {
    const product = await Product.findOne({ name });
    if (!product) {
      throw new Error(`Product with name ${name} not found`);
    }
    return product;
  } catch (error) {
    throw new Error(`Error getting product by name: ${error.message}`);
  }
};

const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
};

const deleteProductById = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      throw new Error(`Product with ID ${productId} not found`);
    }
    return deletedProduct;
  } catch (error) {
    throw new Error(`Error deleting product by ID: ${error.message}`);
  }
};

const updateProductById = async (productId, updatedProductData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      throw new Error(`Product with ID ${productId} not found`);
    }

    return updatedProduct;
  } catch (error) {
    throw new Error(`Error updating product by ID: ${error.message}`);
  }
};

export const productRepository = {
  getAll,
  getById,
  getByName,
  createProduct,
  deleteProductById,
  updateProductById,
};
