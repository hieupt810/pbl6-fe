import IProduct from '../models/IProduct';

type Props = {
  items: IProduct[];
};

export default function ProductList({ items }: Props) {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <a key={item.id} href={`/${item.id}/details`} className="group">
            <img
              alt={item.id}
              src={item.image}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            />
            <h3 className="mt-4 text-ellipsis text-sm text-gray-700">
              {item.name}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {item.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
