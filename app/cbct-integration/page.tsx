import { Metadata } from 'next';
import Image from 'next/image';
import { Container, HeroSection, CTASection, Card } from '@/components';
import { Axis3D, RotateCcw, Target, Ban, Sparkles, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CBCT Integration - Orthero',
  description:
    'Orthero CBCT integration revolutionizes orthodontic treatment with real teeth axis data, mandibular rotation simulation, and optimized biomechanics.',
};

const features = [
  {
    icon: Axis3D,
    title: 'Real Teeth Axis Data',
    description:
      'Through the integration of CBCT technology, we eliminate all assumptions by utilizing real teeth axis data. This ensures that each aligner is precisely designed to match the unique shape and orientation of your teeth.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: RotateCcw,
    title: 'Mandibular Rotation Simulation',
    description:
      'The mandibular rotation is simulated using the real hinge axis set from CBCT analysis. This advanced functionality allows us to account for the unique movement and rotation of your jaw.',
    color: 'from-primary-400 to-secondary-400',
  },
  {
    icon: Target,
    title: 'Optimized Biomechanics',
    description:
      'With CBCT integration, we can position attachments perfectly according to the real center of resistance, optimizing force distribution for more efficient tooth movement.',
    color: 'from-secondary-400 to-secondary-500',
  },
];

const benefits = [
  { icon: Ban, title: 'No Assumptions', description: 'Real data, not estimates' },
  { icon: Sparkles, title: 'Precise Design', description: 'Matched to unique tooth shape' },
  { icon: RotateCcw, title: 'Jaw Movement', description: 'Accounts for mandibular rotation' },
  { icon: Target, title: 'Optimal Force', description: 'Perfect attachment positioning' },
  { icon: Zap, title: 'Better Outcomes', description: 'More efficient tooth movement' },
];

export default function CBCTIntegrationPage() {
  return (
    <>
      <HeroSection
        badge="CBCT Integration"
        title="Revolutionizing Precision in Orthodontic Treatment"
        subtitle="At Orthero, we prioritize precision and accuracy in every aspect of our orthodontic treatments. Our CBCT integration is a testament to this commitment."
        primaryCta={{ text: 'Learn More', href: '/treatment-process' }}
        size="md"
      />

      {/* Features Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              Advanced Technology
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              The Power of CBCT Integration
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Our CBCT integration revolutionizes the way we approach tooth alignment and
              biomechanics, ensuring unparalleled precision in every treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop"
                  alt="CBCT Technology"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl -z-10 opacity-30" />
            </div>

            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                The Process
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                How CBCT Integration Works
              </h2>
              <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                CBCT (Cone Beam Computed Tomography) provides three-dimensional imaging that
                captures the complete anatomy of your teeth, jaws, and surrounding structures.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">3D Scan Acquisition</h4>
                    <p className="text-sm text-neutral-600">
                      High-resolution CBCT scan captures detailed 3D images of your dental anatomy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-400 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Data Processing</h4>
                    <p className="text-sm text-neutral-600">
                      Advanced software analyzes the scan data to determine precise tooth positions
                      and root orientations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Treatment Planning</h4>
                    <p className="text-sm text-neutral-600">
                      Orthodontists use the real data to create a precise, customized treatment
                      plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              Key Benefits
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              Why CBCT Integration Matters
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Experience the advantages of data-driven orthodontic treatment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-heading font-semibold text-neutral-800 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Traditional vs CBCT-Integrated
              </h2>
              <p className="text-neutral-600">
                See the difference that real data makes in treatment planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-red-50 border-2 border-red-100">
                <h3 className="font-heading font-bold text-xl text-red-600 mb-4">
                  Traditional Methods
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-neutral-700">Based on assumptions and estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-neutral-700">Limited 2D imaging data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-neutral-700">Generic attachment positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-neutral-700">Less predictable outcomes</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-green-50 border-2 border-green-100">
                <h3 className="font-heading font-bold text-xl text-green-600 mb-4">
                  CBCT-Integrated
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-neutral-700">Real teeth axis data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-neutral-700">Comprehensive 3D imaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-neutral-700">Precise attachment positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-neutral-700">Predictable, efficient treatment</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Experience Precision Orthodontics"
        description="Discover how CBCT integration can transform your treatment."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        variant="secondary"
      />
    </>
  );
}
