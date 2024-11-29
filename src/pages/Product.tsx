import CustomSelect, { SelectItem } from '../components/CustomSelect';

const categories: SelectItem[] = [
  { id: '1', name: 'Beauty Products' },
  { id: '2', name: 'Books' },
];

const timeRanges: SelectItem[] = [
  { id: '1', name: 'Last 24 hours' },
  { id: '7', name: 'Last 7 days' },
  { id: '30', name: 'Last 30 days' },
];

export default function ProductPage() {
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
