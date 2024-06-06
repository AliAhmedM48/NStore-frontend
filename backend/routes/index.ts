import express from 'express';
import ProductRepository from '../repositories/product';
import productRoutes from './product';
const routes = express.Router();

const productRepository = new ProductRepository();

routes.use('/products', productRoutes(productRepository));
// routes.get('/products', (req, res, next) => {
//   res.status(400).json('donnnnnnnnnn');
// });

export { routes };
