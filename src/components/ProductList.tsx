import IProduct from '../models/IProduct';

type Props = {
  items: IProduct[];
};

export default function ProductList({ items }: Props) {
  return (
    <div className="flex-1">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {items.map((item) => (
          <a key={item.id} href={`/product/${item.id}`} className="group">
            <img
              alt={item.id}
              src={item.image}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              loading="lazy"
            />
            <div className="mt-4 flex flex-row flex-wrap items-center justify-start gap-2">
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium capitalize text-purple-700 ring-1 ring-inset ring-purple-700/10">
                {item.category.replace(/_/g, ' ')}
              </span>

              {parseFloat(item.probability) < 35 && (
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  {item.probability}%
                </span>
              )}

              {parseFloat(item.probability) >= 35 &&
                parseFloat(item.probability) <= 70 && (
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    {item.probability}%
                  </span>
                )}

              {parseFloat(item.probability) > 70 && (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {item.probability}%
                </span>
              )}
            </div>

            <h3 className="mt-1 text-ellipsis text-sm text-gray-700">
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
