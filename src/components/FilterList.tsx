import IFilter from '../models/IFilter';
import CustomSelect from './CustomSelect';

type Props = {
  items: IFilter[];
};

export default function FilterList({ items }: Props) {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      {items.length === 0 ? (
        <>
          <div className="h-9 w-56 animate-pulse rounded-md bg-gray-200" />
          <div className="h-9 w-56 animate-pulse rounded-md bg-gray-200" />
        </>
      ) : (
        items.map((item) => (
          <CustomSelect
            key={item.parameter}
            options={item.options}
            parameter={item.parameter}
            placeholder={item.placeholder}
          />
        ))
      )}
    </div>
  );
}
