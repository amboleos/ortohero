import { Metadata } from 'next';
import Image from 'next/image';
import { Container, HeroSection, CTASection, Card } from '@/components';
import { Layers, Scan, Shield, Heart, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Differences - Orthero',
  description:
    'Discover what makes Orthero different - 3D layer modeling, CBCT integration, exceptional strength, superior comfort, and precision.',
};

const differentiators = [
  {
    icon: Layers,
    title: '3D Layer Modeling',
    description:
      'State-of-the-art 3D layer modeling technology that creates highly accurate digital representations of your teeth for precise treatment planning.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: Scan,
    title: 'CBCT Integration',
    description:
      'Advanced CBCT imaging integration for comprehensive diagnosis and treatment planning, ensuring accurate results every time.',
    color: 'from-primary-400 to-secondary-400',
  },
  {
    icon: Shield,
    title: 'Exceptional Strength',
    description:
      'Our aligners are crafted from durable materials that provide consistent force delivery throughout your treatment journey.',
    color: 'from-secondary-400 to-secondary-500',
  },
  {
    icon: Heart,
    title: 'Superior Comfort',
    description:
      'Patient-focused design ensures maximum comfort during treatment, with smooth edges and a precise fit.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'Accurate tooth movement achieved through advanced engineering and meticulous attention to detail in every aligner.',
    color: 'from-primary-500 to-primary-400',
  },
];

export default function DifferencesPage() {
  return (
    <>
      <HeroSection
        badge="What Sets Us Apart"
        title="Unparalleled Advancements in Clear Aligner Technology"
        subtitle="Providing exceptional strength, comfort, and precision through cutting-edge innovation."
        primaryCta={{ text: 'Learn More', href: '/treatment-process' }}
        size="md"
      />

      {/* Key Differentiators */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              Technology Leadership
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              Redefining Clear Aligner Excellence
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              From our state-of-the-art 3D layer modeling to the integration of CBCT and beyond,
              we continually redefine the standards of clear aligner excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className={`group h-full ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Deep Dive */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                  alt="Advanced technology"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-secondary-500 to-secondary-400 rounded-2xl -z-10 opacity-50" />
            </div>

            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                Our Technology
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Cutting-Edge Innovation at Every Step
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Our commitment to innovation drives us to continuously improve our technology and
                processes, ensuring you receive the most advanced orthodontic care available.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Multi-Layer Technology</h4>
                    <p className="text-sm text-neutral-600">
                      Our 3-layer aligner technology provides optimal force distribution for
                      efficient tooth movement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scan className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Digital Precision</h4>
                    <p className="text-sm text-neutral-600">
                      Advanced digital scanning ensures accurate capture of your dental anatomy
                      for perfect aligner fit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Predictable Results</h4>
                    <p className="text-sm text-neutral-600">
                      Our treatment planning software accurately predicts your final result before
                      treatment begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Standards */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Quality Assurance
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Meeting the Highest Standards
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Every Orthero aligner undergoes rigorous quality control to ensure it meets our
                exacting standards. Our manufacturing facilities are certified to international
                medical device standards.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <p className="font-heading font-bold text-3xl text-primary-500 mb-2">ISO</p>
                  <p className="text-sm text-neutral-600">Certified Manufacturing</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <p className="font-heading font-bold text-3xl text-secondary-600 mb-2">CE</p>
                  <p className="text-sm text-neutral-600">European Standards</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <p className="font-heading font-bold text-3xl text-primary-500 mb-2">FDA</p>
                  <p className="text-sm text-neutral-600">US Compliance</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <p className="font-heading font-bold text-3xl text-secondary-600 mb-2">GMP</p>
                  <p className="text-sm text-neutral-600">Good Manufacturing</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=500&fit=crop"
                  alt="Quality standards"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl -z-10 opacity-30" />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Experience the Orthero Difference"
        description="Discover how our technology can transform your smile."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        variant="secondary"
      />
    </>
  );
}
