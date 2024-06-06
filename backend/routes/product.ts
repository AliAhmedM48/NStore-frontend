import { Router } from 'express';
import ProductRepository from '../repositories/product';

const productRoutes = (repository: ProductRepository) => {
  const router = Router();
  // const repository = new ProductRepository();

  router.get('/', async (req, res, next) => {
    const data = await repository.getAllData();
    res.status(200).json({ data });
  });
  return router;
};

export default productRoutes;
