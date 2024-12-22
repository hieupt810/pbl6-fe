type WebsitePartnersItem = {
  alt: string;
  src: string;
};

const websitePartners: WebsitePartnersItem[] = [
  {
    alt: 'Alibaba',
    src: 'https://www.vectorlogo.zone/logos/alibabagroup/alibabagroup-ar21.svg',
  },
  {
    alt: 'Amazon',
    src: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg',
  },
  {
    alt: 'Taobao',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Taobao_Logo.svg/2880px-Taobao_Logo.svg.png?20131026192021',
  },
  {
    alt: 'DHGate',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/DHgate_logo.svg/2880px-DHgate_logo.svg.png?20141216165055',
  },
  {
    alt: '1688',
    src: 'https://iconape.com/wp-content/files/tm/350530/png/1688-com-logo.png',
  },
];

export default function WebsitePartners() {
  return (
    <div className="bg-white sm:py-0">
      <div className="mx-auto max-w-screen-lg px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {websitePartners.map((partner) => (
            <img
              key={partner.alt}
              alt={partner.alt}
              src={partner.src}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
