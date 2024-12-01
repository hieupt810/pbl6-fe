import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import FilterList, { Filter } from '../components/FilterList';
import ProductList, { Product } from '../components/ProductList';
import api from '../lib/api';

type Pagination = {
  total_records: number;
  total_pages: number;
  current: number;
  next?: number;
  prev?: number;
};

type FilterList = { data: Filter[]; number: number };
type ProductList = { data: Product[]; pagination: Pagination };

export default function ProductPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<Filter[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get('/const')
      .then((resp) => resp.data as FilterList)
      .then((data) => setFilters(data.data))
      .catch(() => navigate('/error'));
  }, [navigate]);

  useEffect(() => {
    if (filters.length !== 0) {
      const params = new URLSearchParams();
      filters
        .map((filter) => filter.param)
        .forEach((param) => {
          const value = searchParams.get(param);
          if (value) {
            params.set(param, value);
          }
        });

      api
        .get('/product', { params })
        .then((resp) => resp.data as ProductList)
        .then((data) => setProducts(data.data))
        .catch(() => navigate('/error'));
    } else {
      api
        .get('/product')
        .then((resp) => resp.data as ProductList)
        .then((data) => setProducts(data.data))
        .catch(() => navigate('/error'));
    }
  }, [filters, navigate, searchParams]);

  return (
    <main className="mx-auto w-full max-w-screen-lg px-6 pt-20 lg:px-8">
      <div>
        <span className="text-pretty text-lg font-semibold sm:text-base">
          Filter products
        </span>

        <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
          <FilterList filters={filters} />
        </div>

        <ProductList products={products} />
      </div>
    </main>
  );
}
