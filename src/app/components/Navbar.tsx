import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import logo from '../../imports/C2C_Logo.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="C2C Tech Solutions" className="h-12 w-12" />
          <span style={{ fontFamily: 'var(--font-heading)' }} className="text-xl text-[var(--navy)]">
            C2C Tech Solutions
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/about"
            style={{ fontFamily: 'var(--font-body)' }}
            className={`transition-colors ${
              isActive('/about') ? 'text-[var(--yellow)]' : 'text-[var(--navy)] hover:text-[var(--yellow)]'
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            style={{ fontFamily: 'var(--font-body)' }}
            className={`transition-colors ${
              isActive('/services') ? 'text-[var(--yellow)]' : 'text-[var(--navy)] hover:text-[var(--yellow)]'
            }`}
          >
            Services
          </Link>
          <Link
            to="/products"
            style={{ fontFamily: 'var(--font-body)' }}
            className={`transition-colors ${
              isActive('/products') ? 'text-[var(--yellow)]' : 'text-[var(--navy)] hover:text-[var(--yellow)]'
            }`}
          >
            Products
          </Link>
          <Link
            to="/explore-courses"
            style={{ fontFamily: 'var(--font-body)' }}
            className={`transition-colors ${
              isActive('/explore-courses') ? 'text-[var(--yellow)]' : 'text-[var(--navy)] hover:text-[var(--yellow)]'
            }`}
          >
            Explore Courses
          </Link>
          <Link
            to="/training"
            style={{ fontFamily: 'var(--font-body)' }}
            className={`transition-colors ${
              isActive('/training') ? 'text-[var(--yellow)]' : 'text-[var(--navy)] hover:text-[var(--yellow)]'
            }`}
          >
            Training
          </Link>
          <Link
            to="/contact"
            style={{ fontFamily: 'var(--font-body)' }}
            className={`transition-colors ${
              isActive('/contact') ? 'text-[var(--yellow)]' : 'text-[var(--navy)] hover:text-[var(--yellow)]'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/explore-courses"
          className="bg-[var(--yellow)] text-[var(--navy)] px-6 py-2.5 rounded-lg hover:bg-[#E0B015] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Enroll Now
        </Link>
      </div>
    </nav>
  );
}
