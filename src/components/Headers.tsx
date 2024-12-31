import Logo from '../icons/Logo';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="flex items-center p-4 lg:p-6" aria-label="Global">
        <a href="/" className="p-2">
          <Logo className="h-8 w-auto" />
        </a>
      </nav>
    </header>
  );
}
