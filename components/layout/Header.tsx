'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Orthero', href: '/about' },
  { name: 'Treatment Process', href: '/treatment-process' },
  { name: 'Advantages', href: '/advantages' },
  { name: 'Differences', href: '/differences' },
  { name: 'Treatable Cases', href: '/treatable-cases' },
  { name: 'Treatment Packages', href: '/treatment-packages' },
  { name: 'Aligner Material', href: '/aligner-material' },
  { name: 'CBCT Integration', href: '/cbct-integration' },
  { name: 'News and Media', href: '/news-media' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact Us', href: '/contact' },
];

const menuCategories = [
  {
    name: 'Best Features',
    subtitle: '',
    href: '/advantages',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Purple.svg',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Treatable Cases',
    subtitle: 'Maloclussions',
    href: '/treatable-cases',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Blue.svg',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Orthero Differences',
    subtitle: 'Technology',
    href: '/differences',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Purple.svg',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Orthero Advantages',
    subtitle: 'Benefits',
    href: '/advantages',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Purple.svg',
    bgColor: 'bg-purple-50',
  },
];

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'TR', name: 'Türkçe' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero-logo-1024x341-1.png"
              alt="Orthero"
              width={140}
              height={47}
              className={cn(
                'h-10 w-auto transition-all duration-300',
                !scrolled && 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop: Menu Button + Language + Log In */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200',
                scrolled
                  ? 'text-neutral-700 hover:text-[#330388]'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <span className="text-sm font-medium">MENU</span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={cn(
                  'flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-neutral-700 hover:text-[#330388]'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {currentLang}
                <ChevronDown className={cn('w-3 h-3 transition-transform', langOpen && 'rotate-180')} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={cn(
                        'block w-full px-4 py-2 text-left text-sm hover:bg-[#330388]/10',
                        currentLang === lang.code && 'text-[#BB1AA0] font-medium'
                      )}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Log In Button */}
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
            {isOpen ? <X className="w-5 h-5" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mega Menu Dropdown */}
        <div
          className={cn(
            'lg:overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[800px] mt-4' : 'max-h-0'
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
            {/* Category Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-0">
              {menuCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'p-4 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-all duration-200',
                    category.bgColor
                  )}
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <span className="font-semibold text-sm text-[#330388]">
                    {category.name}
                  </span>
                  {category.subtitle && (
                    <span className="text-xs text-gray-500">{category.subtitle}</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-700 hover:text-[#330388] hover:bg-[#330388]/5 px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}