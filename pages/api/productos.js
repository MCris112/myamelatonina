import { vproducts } from '../../public/assets/products';

export default function loadProducts(req, res) {
    res.status(200).json(
      vproducts
    )
  }
  