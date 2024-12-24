import React from 'react';

export type Product = {
  id: string;
  category?: string;
  name: string;
  price: string;
  image: string;
  description: string;
  base: string;
  created_at: string;
  updated_at: string;
};

export type ProductDescription = {
  'Industry-specific attributes'?: { [key: string]: string };
  'Other attributes'?: { [key: string]: string };
  'Packaging and delivery'?: { [key: string]: string };
};

export default function ProductDetail({ product }: { product: Product }) {
  const description = JSON.parse(product.description) as ProductDescription;

  const tableClasses =
    'min-w-full border-separate border-spacing-0 rounded-lg border border-gray-300';
  const thFirstClasses =
    'border-b border-r border-gray-300 bg-gray-200 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 w-1/2';
  const thLastClasses =
    'border-b border-gray-300 bg-gray-200 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 w-1/2';
  const tdFirstClasses =
    'border-b border-r border-gray-300 py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 w-1/2';
  const tdLastClasses =
    'border-b border-gray-300 px-3 py-4 text-sm text-gray-500 text-left w-1/2';

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:pb-48 sm:pt-2 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Hình ảnh sản phẩm */}
        <div className="lg:max-w-lg lg:self-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="lg:self-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <div className="mt-6">
            <h2 className="text-2xl font-medium text-gray-900">
              {product.price}
            </h2>
          </div>
          <div className="mt-8">
            <a
              href={product.base}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-5 font-bold text-white hover:opacity-50"
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

        {/* Phần thông tin chi tiết dạng bảng */}
        <div className="mt-10 space-y-8 lg:col-span-2 lg:mt-0">
          {/* Industry-specific attributes */}
          {description['Industry-specific attributes'] &&
            Object.keys(description['Industry-specific attributes']).length >
              0 && (
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Industry-specific attributes
                </h3>
                <table className={tableClasses}>
                  <thead>
                    <tr className="w-full">
                      <th className={thFirstClasses}>Attribute</th>
                      <th className={thLastClasses}>Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {Object.entries(
                      description['Industry-specific attributes'],
                    ).map(([key, value]) => (
                      <tr key={key} className="w-full">
                        <td className={tdFirstClasses}>{key}</td>
                        <td className={tdLastClasses}>{value ?? ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          {/* Other attributes */}
          {description['Other attributes'] &&
            Object.keys(description['Other attributes']).length > 0 && (
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Other attributes
                </h3>
                <table className={tableClasses}>
                  <thead>
                    <tr className="w-full">
                      <th className={thFirstClasses}>Attribute</th>
                      <th className={thLastClasses}>Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {Object.entries(description['Other attributes']).map(
                      ([key, value]) => (
                        <tr key={key} className="w-full">
                          <td className={tdFirstClasses}>{key}</td>
                          <td className={tdLastClasses}>{value ?? ''}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            )}

          {/* Packaging and delivery */}
          {description['Packaging and delivery'] &&
            Object.keys(description['Packaging and delivery']).length > 0 && (
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Packaging and delivery
                </h3>
                <table className={tableClasses}>
                  <thead>
                    <tr className="w-full">
                      <th className={thFirstClasses}>Attribute</th>
                      <th className={thLastClasses}>Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {Object.entries(description['Packaging and delivery']).map(
                      ([key, value]) => (
                        <tr key={key} className="w-full">
                          <td className={tdFirstClasses}>
                            {key.replace(':', '')}
                          </td>
                          <td className={tdLastClasses}>{value ?? ''}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
