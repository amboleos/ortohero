'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Company', href: '#', children: [
    { name: 'About Us', href: '/about' },
    { name: 'Treatment Process', href: '/treatment-process' },
    { name: 'News & Media', href: '/news-media' },
  ]},
  { name: 'Product', href: '#', children: [
    { name: 'Clear Aligners', href: '/treatable-cases' },
    { name: 'Advantages', href: '/advantages' },
    { name: 'Differences', href: '/differences' },
  ]},
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <Image
              src="https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero-logo-1024x341-1.png"
              alt="Orthero"
              width={140}
              height={47}
              className={cn(
                "h-10 w-auto transition-all duration-300",
                !scrolled && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 font-medium transition-all duration-200',
                    scrolled
                      ? 'text-neutral-700 hover:text-[#330388]'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-neutral-700 hover:bg-[#330388]/10 hover:text-[#330388] transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Log In Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://dr.orthero.com.tr/new/main-panel"
              className={cn(
                'px-5 py-2 rounded-full font-medium transition-all duration-200',
                scrolled
                  ? 'bg-[#BB1AA0] text-white hover:bg-[#330388]'
                  : 'bg-[#F0F7FF] text-[#330388] hover:bg-white'
              )}
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200',
              scrolled
                ? 'text-neutral-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">MENU</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[600px] mt-4' : 'max-h-0'
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <div className="px-4 py-2 text-neutral-400 text-sm font-medium">
                      {item.name}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded-lg text-neutral-700 hover:bg-[#330388]/10 hover:text-[#330388] transition-colors duration-200"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-[#330388]/10 hover:text-[#330388] font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-neutral-100">
              <Link
                href="https://dr.orthero.com.tr/new/main-panel"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[#BB1AA0] text-white rounded-full font-normal text-[14px] hover:bg-[#330388] transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
