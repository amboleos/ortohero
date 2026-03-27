import { Metadata } from 'next';
import Image from 'next/image';
import { Container, HeroSection, CTASection, Card } from '@/components';
import {
  Users,
  Clock,
  FlaskConical,
  Zap,
  Eye,
  Sparkles,
  RefreshCw,
  Heart,
  Ban,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advantages - Orthero',
  description:
    'Discover the advantages of Orthero clear aligners - suitable for all ages, fewer visits, faster treatment, and virtually invisible.',
};

const advantages = [
  {
    icon: Users,
    title: 'For All Ages',
    description: 'Perfect for both teens and adults seeking a straighter smile.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: Clock,
    title: 'Fewer Visits',
    description: 'Enjoy more freedom with less time spent at the dentist\'s office.',
    color: 'from-primary-400 to-secondary-400',
  },
  {
    icon: FlaskConical,
    title: 'Scientifically Backed',
    description: 'Backed by science to effectively align your teeth.',
    color: 'from-secondary-400 to-secondary-500',
  },
  {
    icon: Zap,
    title: 'Faster Treatment',
    description: 'Achieve your dream smile in a shorter time frame.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Eye,
    title: 'Virtually Invisible',
    description: 'Straighten your smile confidently with virtually invisible aligners.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: Sparkles,
    title: 'Easy Oral Hygiene',
    description: 'Maintain optimal oral health with easy cleaning and flossing.',
    color: 'from-primary-400 to-secondary-400',
  },
  {
    icon: RefreshCw,
    title: 'Removable',
    description: 'Enjoy the convenience of removing your aligners for eating and cleaning.',
    color: 'from-secondary-400 to-secondary-500',
  },
  {
    icon: Heart,
    title: 'Comfortable',
    description: 'Experience a comfortable treatment with minimal discomfort.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Ban,
    title: 'No Metal',
    description: 'Say goodbye to metal wires and brackets for a more comfortable experience.',
    color: 'from-primary-500 to-primary-400',
  },
];

export default function AdvantagesPage() {
  return (
    <>
      <HeroSection
        badge="Why Choose Orthero"
        title="The Clearest Path to Your Perfect Smile"
        subtitle="Tailored for every age and lifestyle, discover the advantages that set Orthero apart."
        primaryCta={{ text: 'Start Treatment', href: '/contact' }}
        size="md"
      />

      {/* Advantages Grid */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
              9 Key Advantages
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-4">
              Why Patients Choose Orthero
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Experience the benefits of modern orthodontic treatment designed with your comfort and lifestyle in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="group h-full"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <advantage.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                Traditional vs Modern
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 mb-6">
                Clear Aligners vs Traditional Braces
              </h2>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                Experience the freedom of modern orthodontics. No metal brackets, no wires, and no
                restrictions on what you can eat.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Eat whatever you want</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Brush and floss normally</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Fewer office visits required</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Virtually invisible treatment</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop"
                  alt="Clear aligners advantage"
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
        title="Ready to Experience the Advantages?"
        description="Start your journey to a perfect smile today."
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        secondaryCta={{ text: 'View Process', href: '/treatment-process' }}
        variant="primary"
      />
    </>
  );
}
