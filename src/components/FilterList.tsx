import CustomSelect, { SelectItem } from './CustomSelect';

export type Filter = {
  options: SelectItem[];
  param: string;
  placeholder: string;
};

export default function FilterList({ filters }: { filters: Filter[] }) {
  if (filters.length === 0) {
    return (
      <div className="mt-2 flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
        <div className="h-9 w-56 animate-pulse rounded-md bg-gray-200" />
        <div className="h-9 w-56 animate-pulse rounded-md bg-gray-200" />
      </div>
    );
  }

  return (
    <>
      {filters.map((filter) => (
        <CustomSelect
          key={filter.param}
          param={filter.param}
          options={filter.options}
          placeholder={filter.placeholder}
        />
      ))}
    </>
  );
}
