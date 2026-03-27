import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, HeroSection, CTASection, Card, Button } from '@/components';
import { Grid3X3, Minus, AlignLeft, CircleDot, ArrowRight, Microscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Treatable Cases - Orthero',
  description:
    'Orthero clear aligners are clinically proven to treat cases of different malocclusions or teeth misalignment with precision and accuracy.',
};

const treatableConditions = [
  {
    icon: Grid3X3,
    title: 'Overcrowding',
    description:
      'When teeth are too close together, causing overlapping or twisting. Our aligners gradually create space and align teeth properly.',
    severity: 'Mild to Severe',
  },
  {
    icon: Minus,
    title: 'Gaps & Spaces',
    description:
      'Spaces between teeth (diastema) that affect your smile. Orthero aligners gently close these gaps for a seamless appearance.',
    severity: 'All Cases',
  },
  {
    icon: AlignLeft,
    title: 'Crooked Teeth',
    description:
      'Misaligned or rotated teeth that affect both aesthetics and function. Our precision aligners straighten teeth effectively.',
    severity: 'Mild to Moderate',
  },
  {
    icon: CircleDot,
    title: 'Bite Issues',
    description:
      'Various malocclusion concerns including overbite, underbite, crossbite, and open bite. Comprehensive treatment for complex cases.',
    severity: 'Various Types',
  },
];

const technologyFeatures = [
  'Advanced 3D scanning for precise digital models',
  'AI-powered treatment planning software',
  'Custom aligners designed for your unique case',
  'Progress tracking and monitoring tools',
];

export default function TreatableCasesPage() {
  return (
    <>
      <HeroSection
        badge="Treatable Cases"
        title="Clinically Proven Solutions for Every Smile"
        subtitle="Orthero clear aligners effectively treat a wide range of malocclusions and teeth misalignment with precision and accuracy."
        primaryCta={{ text: 'Free Consultation', href: '/contact' }}
        size="md"
      />

      {/* Conditions Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              What We Treat
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              Comprehensive Treatment Options
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              No matter the complexity of your malocclusion or teeth misalignment, Orthero clear
              aligners provide a versatile and effective solution. Our clinically proven aligners
              are carefully designed to address a wide range of orthodontic issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatableConditions.map((condition, index) => (
              <Card key={index} className="group h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300">
                    <condition.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-bold text-xl text-neutral-800">
                        {condition.title}
                      </h3>
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">
                        {condition.severity}
                      </span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{condition.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop"
                  alt="Treatment technology"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl -z-10 opacity-30" />
            </div>

            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                Our Technology
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Advanced Technology for Precise Results
              </h2>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                Our advanced technology and comprehensive treatment planning software ensure that
                your aligners are custom-made to target your unique dental needs, delivering the
                smile you&apos;ve always desired.
              </p>

              <div className="space-y-4 mb-8">
                {technologyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                asChild
              >
                <Link href="/cbct-integration">Explore Our Technology</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Complexity */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Versatility
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Treating Cases of All Complexity
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Experience the unmatched versatility of our clear aligners as they successfully
                address your orthodontic concerns, from simple spacing issues to complex bite
                corrections.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <Microscope className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <p className="font-semibold text-neutral-800">Mild</p>
                  <p className="text-sm text-neutral-500">Cases</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <Microscope className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                  <p className="font-semibold text-neutral-800">Moderate</p>
                  <p className="text-sm text-neutral-500">Cases</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 text-center">
                  <Microscope className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <p className="font-semibold text-neutral-800">Complex</p>
                  <p className="text-sm text-neutral-500">Cases</p>
                </div>
              </div>

              <p className="text-neutral-600">
                Our expert orthodontists work with you to develop a personalized treatment plan
                that addresses your specific needs and delivers optimal results.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=600&h=500&fit=crop"
                  alt="Treatable cases"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-secondary-500 to-secondary-400 rounded-2xl -z-10 opacity-50" />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Start Your Transformation?"
        description="Find out if Orthero clear aligners are right for you."
        primaryCta={{ text: 'Get Free Assessment', href: '/contact' }}
        secondaryCta={{ text: 'View Process', href: '/treatment-process' }}
        variant="primary"
      />
    </>
  );
}
