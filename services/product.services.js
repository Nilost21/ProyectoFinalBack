import { productRepository } from '../repositories/product.repository.js';

const getAll = async () => {
  try {
    return await productRepository.getAll();
  } catch (error) {
    throw new Error(`Error getting all products: ${error.message}`);
  }
};

const getById = async (productId) => {
  try {
    return await productRepository.getById(productId);
  } catch (error) {
    throw new Error(`Error getting product by ID: ${error.message}`);
  }
};

const addProduct = async (productData) => {
  try {
    return await productRepository.createProduct(productData);
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
};

const deleteProduct = async (productId) => {
  try {
    return await productRepository.deleteProductById(productId);
  } catch (error) {
    throw new Error(`Error deleting product: ${error.message}`);
  }
};

const updateProduct = async (productId, updatedProductData) => {
  try {
    return await productRepository.updateProductById(
      productId,
      updatedProductData
    );
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
};

export const productService = {
  getAll,
  getById,
  addProduct,
  deleteProduct,
  updateProduct,
};
