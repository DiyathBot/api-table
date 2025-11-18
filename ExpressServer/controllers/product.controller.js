import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const { limit = 10, skip = 0 } = req.query;
    const productData = await Product.find().limit(parseInt(limit)).skip(parseInt(skip));
    const total = await Product.countDocuments();
    
    const formattedProducts = productData.map(product => ({
      _id: product._id,
      Name: product.name,
      Price: product.price,
      Category: product.category,
      Brand: product.brand,
      Stock: product.stock
    }));
    
    res.json({ data: formattedProducts, total });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};