import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const getProducts = async (req, res) => {
  const { search, category, inStock } = req.query;
  const filter = {};
  if (search) filter.name = { $regex: search, $options: 'i' };
  if (category) filter.categoryId = category;
  if (inStock) filter.inStock = inStock === 'true';

  const products = await Product.find(filter).populate('categoryId');
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('categoryId');
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
};
