import IFilter from '../models/IFilter';
import CustomSelect from './CustomSelect';

type Props = {
  items: IFilter[];
};

export default function FilterList({ items }: Props) {
  if (items.length === 0) {
    return <div />;
  }

  return (
    <div className="flex w-56 flex-col items-start justify-start gap-4">
      {items.map((item) => (
        <CustomSelect
          key={item.parameter}
          label={item.placeholder}
          options={item.options}
          parameter={item.parameter}
        />
      ))}
    </div>
  );
}
