import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import FilterList from '../components/FilterList';
import Modal from '../components/Modal';
import ProductList from '../components/ProductList';
import api from '../lib/api';
import IFilter from '../models/IFilter';
import IFiltersResponse from '../models/IFilterResponse';
import IProduct from '../models/IProduct';
import IProductsResponse from '../models/IProductsResponse';

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [total, setTotal] = useState<number>(0);
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function fetchConst() {
    const resp = await api.get('/const');
    const data = resp.data as IFiltersResponse;
    setFilters(data.data);
  }

  async function fetchProducts(params: URLSearchParams) {
    const resp = await api.get('/product', { params });
    const data = resp.data as IProductsResponse;
    setProducts(data.data);
    setTotal(data.pagination.total);
  }

  useEffect(() => {
    void fetchConst();
  }, []);

  useEffect(() => {
    if (filters.length === 0) return;

    const newSearchParams = new URLSearchParams(searchParams);
    for (const filter of filters) {
      const paramValue = searchParams.get(filter.parameter);
      const initialSelected =
        filter.options.find((opt) => opt.value === paramValue) ||
        filter.options[0];

      if (initialSelected && initialSelected.value !== '') {
        newSearchParams.set(filter.parameter, initialSelected.value);
      }
    }
    void fetchProducts(newSearchParams);
  }, [filters, searchParams, setSearchParams]);

  if (filters.length === 0) {
    return (
      <Modal
        open={true}
        title="Loading, please wait..."
        subtitle="Your request is being processed. This won't take long!"
      />
    );
  }

  return (
    <div className="relative flex flex-row items-start justify-start gap-x-8">
      <FilterList items={filters} total={total} />
      <div className="w-56" />
      <ProductList items={products} />
    </div>
  );
}
