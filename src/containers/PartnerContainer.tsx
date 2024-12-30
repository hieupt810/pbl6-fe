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
    alt: 'DHGate',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/DHgate_logo.svg/2880px-DHgate_logo.svg.png?20141216165055',
  },
];

export default function PartnerContainer() {
  return (
    <div>
      <h2 className="text-center text-lg/8 font-semibold text-gray-900">
        Trusted by the world&apos;s most popular e-commerce platforms
      </h2>

      <div className="flex flex-col items-center justify-around py-4 md:flex-row md:py-6">
        {websitePartners
          .sort((a, b) => a.alt.localeCompare(b.alt))
          .map((partner) => (
            <img
              key={partner.alt}
              alt={partner.src}
              src={partner.src}
              className="max-h-20 w-full object-contain"
            />
          ))}
      </div>
    </div>
  );
}
