import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import FilterList from '../components/FilterList';
import ProductList from '../components/ProductList';
import api from '../lib/api';
import IFilter from '../models/IFilter';
import IFiltersResponse from '../models/IFilterResponse';
import IProduct from '../models/IProduct';
import IProductsResponse from '../models/IProductsResponse';

export default function ProductContainer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get('/const')
      .then((resp) => resp.data as IFiltersResponse)
      .then((data) => setFilters(data.data))
      .catch(() => navigate('/error'));
  }, [navigate]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.length !== 0) {
      filters
        .map((filter) => filter.parameter)
        .forEach((param) => {
          const value = searchParams.get(param);
          if (value) params.set(param, value);
        });

      api
        .get('/product', { params })
        .then((resp) => resp.data as IProductsResponse)
        .then((data) => setProducts(data.data))
        .catch(() => navigate('/error'));
    }
  }, [filters, navigate, searchParams]);

  return (
    <div className="mt-4">
      <h2 className="text-center text-lg/8 font-semibold">
        Products from these e-commerce websites
      </h2>

      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-8">
        <FilterList items={filters} />
        <ProductList items={products} />
      </div>
    </div>
  );
}
