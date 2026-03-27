import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About Orthero', href: '/about' },
    { name: 'Treatment Packages', href: '/treatment-packages' },
    { name: 'News and Media', href: '/news-media' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ],
  product: [
    { name: 'Treatable Cases', href: '/treatable-cases' },
    { name: 'Treatment Process', href: '/treatment-process' },
    { name: 'Aligner Material', href: '/aligner-material' },
    { name: 'Advantages', href: '/advantages' },
    { name: 'Differences', href: '/differences' },
    { name: 'CBCT Integration', href: '/cbct-integration' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#23282D] text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@orthero.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    info@orthero.com
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="https://www.facebook.com/ortheroaligner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#BB1AA0] hover:text-white transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ortheroaligner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#BB1AA0] hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              {/* Language Selector */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <button className="hover:text-white transition-colors">ES</button>
                <span>|</span>
                <button className="text-white font-medium">EN</button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">COPYRIGHT © 2024 Orthero</p>
            <a
              href="https://nexelo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Designed + Developed by NEXELO
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
