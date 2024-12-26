const COMPANY_NAME = 'Tailwind UI';
const COMPANY_IMG =
  'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center p-4 lg:p-6" aria-label="Global">
        <a href="/" className="p-2">
          <span className="sr-only">{COMPANY_NAME}</span>
          <img className="h-8 w-auto" src={COMPANY_IMG} alt={COMPANY_NAME} />
        </a>
      </nav>
    </header>
  );
}
