// import ProductDetail from '../components/ProductDetail';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductDetail, { Product } from '../components/ProductDetail';
import api from '../lib/api';

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/product/${id}`)
      .then((res) => res.data as Product)
      .then((product) => setProduct(product))
      .catch(() => navigate('/error'));
  }, [id, navigate]);

  if (!product) {
    return (
      <main className="mx-auto w-full max-w-screen-lg px-6 pt-20 lg:px-8">
        <div>Loading</div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-screen-lg px-6 pt-20 lg:px-8">
      <div>
        <ProductDetail product={product} />
      </div>
    </main>
  );
}
