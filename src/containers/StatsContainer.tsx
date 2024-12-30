type IStat = {
  name: string;
  value: string;
};

const stats: IStat[] = [
  { name: 'E-commerce Platform', value: '3+' },
  { name: 'Probability', value: '> 70%' },
  { name: 'Team Members', value: '2' },
];

export default function StatsContainer() {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base/7 text-gray-600">{stat.name}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
