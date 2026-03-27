import Link from 'next/link';
import { Container } from './Container';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Treatment Process', href: '/treatment-process' },
    { name: 'News & Media', href: '/news-media' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
  ],
  products: [
    { name: 'Clear Aligners', href: '/treatable-cases' },
    { name: 'Aligner Material', href: '/aligner-material' },
    { name: 'CBCT Integration', href: '/cbct-integration' },
    { name: 'Advantages', href: '/advantages' },
    { name: 'Differences', href: '/differences' },
    { name: 'Treatable Cases', href: '/treatable-cases' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-[#23282D] text-white">
      {/* Main Footer */}
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
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
                {footerLinks.products.map((link) => (
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
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#BB1AA0]" />
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@orthero.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <Mail className="w-4 h-4 text-[#BB1AA0]" />
                    info@orthero.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-[#BB1AA0] mt-0.5 flex-shrink-0" />
                  <span>123 Innovation Drive, Medical District, NY 10001</span>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#BB1AA0] hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              COPYRIGHT © {new Date().getFullYear()} Orthero
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
