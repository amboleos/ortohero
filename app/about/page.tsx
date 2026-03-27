import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, HeroSection, CTASection, Button } from '@/components';
import { Globe, Users, Award, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Orthero',
  description:
    'Orthero is a global medical device company specializing in orthodontic clear aligners for over a decade, bringing smiles to over 60,000 satisfied customers across more than 20 countries.',
};

const stats = [
  {
    value: '10+',
    label: 'Years of Experience',
    icon: Calendar,
    color: 'from-primary-500 to-primary-400',
  },
  {
    value: '60,000+',
    label: 'Satisfied Customers',
    icon: Users,
    color: 'from-secondary-500 to-secondary-400',
  },
  {
    value: '20+',
    label: 'Countries Served',
    icon: Globe,
    color: 'from-primary-400 to-secondary-400',
  },
  {
    value: 'Global',
    label: 'Medical Device Company',
    icon: Award,
    color: 'from-secondary-400 to-primary-500',
  },
];

const values = [
  {
    title: 'Innovation',
    description:
      'We continuously push the boundaries of orthodontic technology, leveraging 3D technologies and advanced engineering methods.',
  },
  {
    title: 'Excellence',
    description:
      'Our commitment to quality ensures every aligner meets the highest standards of precision and effectiveness.',
  },
  {
    title: 'Patient-Centric',
    description:
      'We put patients first, designing solutions that are comfortable, convenient, and deliver exceptional results.',
  },
  {
    title: 'Global Reach',
    description:
      'With presence in over 20 countries, we bring beautiful smiles to patients around the world.',
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="About Orthero"
        title="Revolutionizing Orthodontic Treatment"
        subtitle="Delivering unparalleled results with our innovative approach and exceptional expertise."
        primaryCta={{ text: 'Our Technology', href: '/advantages' }}
        size="md"
      />

      {/* Stats Section */}
      <section className="relative -mt-20 z-10">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 text-white`}
                >
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-1">
                  {stat.value}
                </p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="section-padding pt-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                A Decade of Transforming Smiles
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Orthero is a global medical device company, specializing in orthodontic clear
                aligners for over a decade, bringing smiles to over 60,000 satisfied customers
                across more than 20 countries.
              </p>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                Leveraging the power of 3D technologies, alongside our orthodontic expertise and
                advanced engineering methods, we are dedicated to delivering what people truly
                deserve — a confident, beautiful smile.
              </p>
              <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />} asChild>
                <Link href="/treatment-process">Our Process</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=300&h=400&fit=crop"
                      alt="Orthero team"
                      width={300}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop"
                      alt="Technology"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=300&h=200&fit=crop"
                      alt="Dental care"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=400&fit=crop"
                      alt="Clear aligners"
                      width={300}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl opacity-20" />
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Our core values guide everything we do, from product development to patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <span className="font-heading font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop"
                  alt="Our Team"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-secondary-500 to-secondary-400 rounded-2xl -z-10 opacity-50" />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Our Team
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Expertise Meets Innovation
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                At Orthero, we believe success is the culmination of exceptional people, advanced
                technology, and clinically proven products.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Our team of dental experts combines their expertise with the latest advancements in
                orthodontics to ensure the success of your treatment. We utilize one of the most
                advanced and comprehensive treatment planning software available in the industry.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This cutting-edge tool guarantees the precision, accuracy, and effectiveness of
                your treatment and optimal results.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Transform Your Smile?"
        description="Join over 60,000 satisfied customers who chose Orthero."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'Learn More', href: '/treatment-process' }}
        variant="secondary"
      />
    </>
  );
}
