import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from '../../imports/C2C_Logo.png';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/explore-courses', label: 'Explore Courses' },
  { to: '/training', label: 'Training' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={logo} alt="C2C Tech Solutions" className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="truncate text-base text-[var(--navy)] sm:text-xl"
          >
            C2C Tech Solutions
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ fontFamily: 'var(--font-body)' }}
              className={`whitespace-nowrap text-sm transition-colors xl:text-base ${
                isActive(link.to)
                  ? 'text-[var(--yellow)]'
                  : 'text-[var(--navy)] hover:text-[var(--yellow)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/explore-courses"
            className="hidden rounded-lg bg-[var(--yellow)] px-4 py-2 text-sm text-[var(--navy)] transition-colors hover:bg-[#E0B015] sm:inline-flex lg:px-6 lg:py-2.5 lg:text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Enroll Now
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[var(--navy)] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ fontFamily: 'var(--font-body)' }}
                className={`rounded-lg px-3 py-3 text-base transition-colors ${
                  isActive(link.to)
                    ? 'bg-[var(--yellow)]/15 text-[var(--navy)] font-medium'
                    : 'text-[var(--navy)] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore-courses"
              className="mt-2 rounded-lg bg-[var(--yellow)] px-4 py-3 text-center text-[var(--navy)] transition-colors hover:bg-[#E0B015]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
