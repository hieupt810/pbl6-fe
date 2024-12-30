import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Modal from '../components/Modal';
import ProductDetail from '../components/ProductDetail';
import api from '../lib/api';
import IProduct from '../models/IProduct';

export default function Details() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  async function fetchProductDetails(id: string | undefined) {
    if (!id) {
      throw new Error('Product ID is not provided.');
    }

    const response = await api.get(`/product/${id}`);
    const product = response.data as IProduct;
    setProduct(product);
  }

  useEffect(() => {
    void fetchProductDetails(id);
  }, [id]);

  if (!product) {
    return (
      <Modal
        open={true}
        title="Loading, please wait..."
        subtitle="Your request is being processed. This won't take long!"
      />
    );
  }

  return (
    <main className="mx-auto w-full max-w-screen-lg">
      <ProductDetail item={product} />
    </main>
  );
}
