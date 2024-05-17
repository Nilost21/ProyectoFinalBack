import { productService } from '../services/product.services.js';

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await productService.getById(productId);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const addNewProduct = async (req, res, next) => {
  const productData = req.body;
  try {
    const newProduct = await productService.addProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (req, res, next) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  try {
    const updatedProduct = await productService.updateProduct(
      productId,
      updatedProductData
    );
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await productService.deleteProduct(productId);
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
};

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
};
