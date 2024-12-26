import IProduct from '../models/IProduct';
import IProductDescription from '../models/IProductDescription';

type Props = {
  item: IProduct;
};

export default function ProductDetail({ item }: Props) {
  const description = JSON.parse(item.description) as IProductDescription;

  const tableClasses =
    'min-w-full border-separate border-spacing-0 rounded-lg border border-gray-300';
  const thFirstClasses =
    'border-b border-r border-gray-300 bg-gray-200 py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 w-1/2';
  const thLastClasses =
    'border-b border-gray-300 bg-gray-200 px-3 py-3.5 text-left text-sm font-bold text-gray-900 w-1/2';
  const tdFirstClasses =
    'border-b border-r border-gray-300 py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 w-1/2';
  const tdLastClasses =
    'border-b border-gray-300 px-3 py-4 text-sm text-gray-500 text-left w-1/2';

  const renderDescriptionSection = (
    title: string,
    section: IProductDescription,
  ) => (
    <div key={title}>
      <h3 className="mb-4 pt-8 text-xl font-bold text-gray-900">{title}</h3>
      <table className={tableClasses}>
        <thead>
          <tr className="w-full">
            <th className={thFirstClasses}>Attribute</th>
            <th className={thLastClasses}>Value</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {Object.entries(section).map(([key, value]) => (
            <tr key={key} className="w-full">
              <td className={tdFirstClasses}>{key.replace(':', '')}</td>
              <td className={tdLastClasses}>{value ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:pb-48 sm:pt-2 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product image */}
        <div className="lg:max-w-lg lg:self-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Product information */}
        <div className="lg:self-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {item.name}
          </h1>
          <div className="mt-6">
            <h2 className="text-2xl font-medium text-gray-900">{item.price}</h2>
          </div>
          <div className="mt-8">
            <a
              href={item.base_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 p-4 font-bold text-white hover:opacity-80"
            >
              <svg
                className="h-6 w-6 brightness-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Original Product
            </a>
          </div>
        </div>

        {/* Detailed information in table format */}
        <div className="mt-10 space-y-8 lg:col-span-2 lg:mt-0">
          {Object.entries(description).map(([title, section]) =>
            renderDescriptionSection(title, section),
          )}
        </div>
      </div>
    </div>
  );
}
