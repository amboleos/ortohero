import { Metadata } from 'next';
import Image from 'next/image';
import { Container, HeroSection, CTASection, Card } from '@/components';
import { Shield, Leaf, Layers, Ruler, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aligner Material - Orthero',
  description:
    'Orthero clear aligners are manufactured using biocompatible PET-G plastic materials with innovative 3-layer technology for optimal comfort and effectiveness.',
};

const materialFeatures = [
  {
    icon: Shield,
    title: 'Biocompatible & Safe',
    description:
      'At Orthero, your health and well-being are our top priorities. Our aligners are made with biocompatible plastic materials that are safe to use in your mouth.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: Leaf,
    title: 'Food-Grade Quality',
    description:
      'Made from PET-G, a material commonly used in food packaging due to its high level of safety and suitability for contact with consumables.',
    color: 'from-primary-400 to-secondary-400',
  },
  {
    icon: CheckCircle2,
    title: '100% Biomaterials',
    description:
      'We take pride in utilizing 100% biomaterials in the production of our aligners, ensuring they are gentle on your teeth and gums.',
    color: 'from-secondary-400 to-secondary-500',
  },
];

const specifications = [
  { product: 'Active Aligners', thickness: '0.75 mm' },
  { product: 'Enhancers', thickness: '0.75 mm' },
  { product: 'Herotain Retainers', thickness: '1.0 mm' },
];

export default function AlignerMaterialPage() {
  return (
    <>
      <HeroSection
        badge="Aligner Material"
        title="Safe, Biocompatible Materials for Your Comfort"
        subtitle="Orthero clear aligners are manufactured using biocompatible plastic materials that prioritize your safety and comfort throughout your orthodontic treatment."
        primaryCta={{ text: 'Learn More', href: '/treatment-process' }}
        size="md"
      />

      {/* Material Overview */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                PET-G Technology
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Polyethylenterephthalat-Glycol Copolyester
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Our aligners use PET-G, a food-grade material known for its exceptional
                biocompatibility and durability. This advanced material ensures optimal comfort
                while delivering effective orthodontic results.
              </p>

              <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">Made in Germany</p>
                  <p className="text-sm text-neutral-600">
                    Premium quality materials from certified manufacturers
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=600&h=500&fit=crop"
                  alt="Aligner material"
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

      {/* Material Features */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
              Safety First
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              Why Our Materials Matter
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Our aligners have undergone rigorous testing to ensure they meet stringent quality
              and safety standards, providing you with peace of mind throughout your treatment
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {materialFeatures.map((feature, index) => (
              <Card key={index} className="group h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 Layer Technology */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="w-20 h-20 text-primary-500 mx-auto mb-4" />
                    <p className="font-heading font-bold text-2xl text-neutral-800">3 Layer</p>
                    <p className="text-neutral-600">Technology</p>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-200 rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-full h-full border border-secondary-200 rounded-2xl -z-20" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Innovation
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                3 Layer Technology
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Orthero clear aligners feature innovative 3-layer technology that enhances their
                durability and effectiveness. This advanced design ensures that each aligner is
                strong enough to withstand the forces of orthodontic movement while maintaining a
                comfortable fit.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <span className="text-neutral-700">Inner layer for comfort</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-400 flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <span className="text-neutral-700">Core layer for strength</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <span className="text-neutral-700">Outer layer for durability</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications Table */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                Specifications
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Product Specifications
              </h2>
              <p className="text-neutral-600">
                Precise thickness specifications for each product type.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                    <th className="px-8 py-5 text-left font-heading font-semibold">Product</th>
                    <th className="px-8 py-5 text-left font-heading font-semibold">
                      <div className="flex items-center gap-2">
                        <Ruler className="w-5 h-5" />
                        Thickness
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={`border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors`}
                    >
                      <td className="px-8 py-5 font-medium text-neutral-800">{spec.product}</td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold">
                          {spec.thickness}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Experience the Quality Difference"
        description="Discover how our premium materials can transform your smile."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        variant="primary"
      />
    </>
  );
}
