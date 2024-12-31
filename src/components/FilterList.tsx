import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

import IFilter from '../models/IFilter';
import CustomSelect from './CustomSelect';

type Props = {
  items: IFilter[];
  total: number;
};

export default function FilterList({ items, total }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  if (items.length === 0) {
    return <div />;
  }

  function handlePageChange(newPage: number) {
    setPage(newPage);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage.toString());
    setSearchParams(newSearchParams);
  }

  return (
    <div className="fixed flex w-56 flex-col items-center justify-start gap-4">
      {items.map((item) => (
        <CustomSelect
          key={item.parameter}
          label={item.placeholder}
          options={item.options}
          parameter={item.parameter}
        />
      ))}

      <div className="flex flex-row items-center justify-center">
        <button
          className="p-2"
          disabled={page === 1}
          aria-disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <ChevronLeftIcon className="size-4" />
        </button>

        <div className="flex flex-row items-center justify-center gap-1 px-4 py-2 text-sm/6">
          <span>{page}</span>
          <span>/</span>
          <span>{total}</span>
        </div>

        <button
          className="p-2"
          disabled={page === total}
          aria-disabled={page === total}
          onClick={() => handlePageChange(page + 1)}
        >
          <ChevronRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
