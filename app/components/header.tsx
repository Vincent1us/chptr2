import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#2c1810] to-[#5a3728] text-soft-brown py-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition">
          Vincent
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portofolio" className="hover:text-yellow-300 transition text-white">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-300 transition text-white">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
