import { Metadata } from 'next';
import { Container } from '@/components';
import { Shield, Users, Database, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Orthero',
  description:
    'Orthero privacy policy - Learn how we collect, use, and protect your personal information.',
};

const sections = [
  {
    icon: Users,
    title: 'Information Sharing',
    content: `We may share the information that we collect, both personal and non-personal, with third parties such as:

• Advertisers
• Contest sponsors
• Promotional and marketing partners
• Others who provide our content or whose products or services we think may interest you

We may also share it with our current and future affiliated companies and business partners, and if we are involved in a merger, asset sale, or other business reorganization, we may also share or transfer your personal and non-personal information to our successors-in-interest.`,
  },
  {
    icon: Database,
    title: 'Third-Party Service Providers',
    content: `We may engage trusted third-party service providers to perform functions and provide services to us, such as:

• Hosting and maintaining our servers and the website/app
• Database storage and management
• E-mail management
• Storage marketing
• Credit card processing
• Customer service
• Fulfilling orders for products and services

We will likely share your personal information, and possibly some non-personal information, with these third parties to enable them to perform these services for us and you.`,
  },
  {
    icon: Shield,
    title: 'Analytics',
    content: `We may share portions of our log file data, including IP addresses, for analytics purposes with third parties such as:

• Web analytics partners
• Application developers
• Ad networks

If your IP address is shared, it may be used to estimate general location and other technographic such as:

• Connection speed
• Whether you have visited the website/app in a shared location
• Type of the device used to visit the website/app

They may aggregate information about our advertising and what you see on the website/app and then provide auditing, research, and reporting for us and our advertisers.`,
  },
  {
    icon: Scale,
    title: 'Legal Disclosures',
    content: `We may also disclose personal and non-personal information about you to:

• Government or law enforcement officials
• Private parties

As we, in our sole discretion, believe necessary or appropriate to:

• Respond to claims, legal processes (including subpoenas)
• Protect our rights and interests or those of a third party
• Protect the safety of the public or any person
• Prevent or stop any illegal, unethical, or legally actionable activity
• Otherwise comply with applicable court orders, laws, rules and regulations`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              Legal
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-neutral-600 text-lg">
              Last updated: March 26, 2026
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600 text-lg mb-12 leading-relaxed">
                At Orthero, we are committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our
                services.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-md border border-neutral-100"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-neutral-800">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-neutral-600 leading-relaxed whitespace-pre-line pl-16">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-16 bg-neutral-50 rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-4">
                  Contact Us
                </h2>
                <p className="text-neutral-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us at:
                </p>
                <div className="space-y-2 text-neutral-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:privacy@orthero.com" className="text-primary-500 hover:underline">
                      privacy@orthero.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+908504332210" className="text-primary-500 hover:underline">
                      +90 850 433 22 10
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> İTÜ Ayazağa Kampüsü, Arı Teknokent ARI 1, No:2/5/30,
                    Sarıyer / İstanbul, TÜRKİYE
                  </p>
                </div>
              </div>

              {/* Changes Notice */}
              <div className="mt-8 p-6 bg-secondary-50 rounded-xl border border-secondary-100">
                <p className="text-neutral-700">
                  <strong>Note:</strong> We may update this Privacy Policy from time to time. We
                  will notify you of any changes by posting the new Privacy Policy on this page
                  and updating the &quot;Last updated&quot; date.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
