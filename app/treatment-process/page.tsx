import { Metadata } from 'next';
import Image from 'next/image';
import { Container, HeroSection, CTASection, Card } from '@/components';
import {
  ClipboardCheck,
  Scan,
  FileText,
  Layers,
  Eye,
  Smartphone,
  Shield,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Treatment Process - Orthero',
  description:
    'Discover the seamless Orthero treatment process. From assessment to your new smile, we guide you every step of the way with cutting-edge technology.',
};

const treatmentSteps = [
  {
    step: 1,
    title: 'Assessment',
    icon: ClipboardCheck,
    description:
      'Our streamlined approach begins with a comprehensive assessment of the patient\'s dental condition, where we gather detailed information about the teeth and jaw alignment and upload it to the Orthero Web Portal.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    step: 2,
    title: '3D Digital Model',
    icon: Scan,
    description:
      'Using state-of-the-art technology, we create a highly accurate 3D digital model of the teeth, allowing our expert orthodontists to analyze and plan the treatment with precision.',
    color: 'from-primary-400 to-secondary-400',
  },
  {
    step: 3,
    title: 'Treatment Plan',
    icon: FileText,
    description:
      'Our skilled team then designs a customized treatment plan that addresses the specific orthodontic concerns, utilizing advanced software to simulate the desired outcome.',
    color: 'from-secondary-400 to-secondary-500',
  },
  {
    step: 4,
    title: 'Aligner Fabrication',
    icon: Layers,
    description:
      'Once the treatment plan is finalized, our team fabricates a series of clear aligners tailored to your unique needs. These aligners, with 3-layer technology, are designed to gradually move the patient\'s teeth into their ideal position.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    step: 5,
    title: 'Progress Monitoring',
    icon: Eye,
    description:
      'As the treatment progresses, we maintain a close watch on the patient\'s development, offering guidance and support to ensure the most favorable outcomes.',
    color: 'from-secondary-600 to-primary-600',
  },
];

export default function TreatmentProcessPage() {
  return (
    <>
      <HeroSection
        badge="Treatment Process"
        title="Meticulously Crafted Treatment for Optimal Results"
        subtitle="At Orthero, we have engineered a treatment process that utilizes a digital workflow and cutting-edge systems to achieve the optimal orthodontic result."
        primaryCta={{ text: 'Start Your Journey', href: '/contact' }}
        size="md"
      />

      {/* Treatment Steps */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              5-Step Process
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              Your Journey to a Perfect Smile
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              From initial consultation to your final results, every step is designed for precision and comfort.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-600" />

            <div className="space-y-12 lg:space-y-0">
              {treatmentSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <Card className="relative">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 text-white`}
                        >
                          <step.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-primary-500 mb-1 block">
                            Step {step.step}
                          </span>
                          <h3 className="font-heading font-bold text-xl text-neutral-800 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Center dot - desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary-500 items-center justify-center font-heading font-bold text-primary-500 shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Coming Soon - Mobile App */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto w-64 h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[3rem] transform rotate-6" />
                <div className="absolute inset-2 bg-neutral-900 rounded-[2.75rem] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Smartphone className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-white/80 text-sm">Mobile App</p>
                    <p className="text-white font-heading font-bold text-xl mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                Coming Soon
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-6">
                Monitoring Via Mobile App
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Stay tuned for the upcoming launch of our mobile app, enabling effortless access to
                real-time progress monitoring of the patient&apos;s condition right at your fingertips.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Providing enhanced convenience and efficiency in tracking treatment milestones, the
                app will revolutionize how you monitor your orthodontic journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Herotain Retainers */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Premium Retainers
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Herotain Retainers
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                Herotain retainers provide the ultimate solution for durable and comfortable
                retention. Designed to be stronger than traditional options, they resist wear over
                long-term use while maintaining high elasticity for exceptional comfort.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-primary-500">40%</p>
                    <p className="text-neutral-600">Stronger than traditional options</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-secondary-600">0.3mm</p>
                    <p className="text-neutral-600">Relapse recovery capability</p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-600">
                In the event of a relapse, Herotain retainers can recover up to 0.3mm, ensuring
                your smile stays perfectly aligned.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop"
                  alt="Herotain Retainers"
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
        title="Ready to Start Your Treatment?"
        description="Contact us today to begin your journey to a perfect smile."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        variant="primary"
      />
    </>
  );
}
