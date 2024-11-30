import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import CustomSelect, { SelectItem } from '../components/CustomSelect';
import api from '../lib/api';

type Response = {
  category: SelectItem[];
  time: SelectItem[];
};

export default function ProductPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<SelectItem[]>([]);
  const [timeRanges, setTimeRanges] = useState<SelectItem[]>([]);

  useEffect(() => {
    api
      .get('/lib')
      .then((resp) => resp.data as Response)
      .then((data) => {
        setCategories(data.category);
        setTimeRanges(data.time);
      })
      .catch(() => navigate('/error'));
  }, [navigate]);

  return (
    <main className="mx-auto w-full max-w-screen-lg px-6 pt-20 lg:px-8">
      <div>
        <span className="text-pretty text-lg font-semibold sm:text-base">
          Filter products
        </span>

        <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
          <CustomSelect
            options={categories}
            placeholder="Category"
            param="category"
          />

          <CustomSelect
            options={timeRanges}
            placeholder="Time range"
            param="time-range"
          />
        </div>
      </div>
    </main>
  );
}
