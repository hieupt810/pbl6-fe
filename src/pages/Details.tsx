import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductDetail from '../components/ProductDetail';
import api from '../lib/api';
import IProduct from '../models/IProduct';

export default function Details() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/product/${id}`)
      .then((res) => res.data as IProduct)
      .then((product) => setProduct(product))
      .catch(() => navigate('/error'));
  }, [id, navigate]);

  if (!product) {
    return (
      <main className="mx-auto w-full max-w-screen-lg">
        <div>Loading</div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-screen-lg">
      <ProductDetail item={product} />
    </main>
  );
}
