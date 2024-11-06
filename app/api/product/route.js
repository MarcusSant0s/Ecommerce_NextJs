import { client } from '@/lib/client';

export default async function handler(req, res) {
    const { start = 0, limit = 20 } = req.query;
    const products = await fetchProducts(parseInt(start), parseInt(limit));
    res.status(200).json(products);
  }