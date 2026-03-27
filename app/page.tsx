import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, HeroSlider, NewsletterSection, Button } from '@/components';
import {
  Eye,
  Zap,
  Sparkles,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orthero - The Clearest Way of Changing Your Smile',
  description:
    'Orthero clear aligners are nearly invisible, removable, and comfortable aligners used and trusted by dentists in straightening teeth. Advanced 3D scanning and design technology for aesthetic orthodontics.',
};

const heroSlides = [
  {
    badge: 'Clear Aligner Technology',
    title: 'The Clearest Way of Changing Your Smile',
    subtitle: 'Orthero clear aligners are nearly invisible, removable, and comfortable aligners used and trusted by dentists in straightening teeth.',
    primaryCta: { text: 'Learn More', href: '/advantages' },
    secondaryCta: { text: 'Log In', href: 'https://dr.orthero.com.tr/new/main-panel' },
    image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_homepage_hero_banner-1-scaled.webp',
  },
];

const stats = [
  { value: '10', suffix: ' Years', label: 'Orthero Smiles' },
  { value: '60,000', suffix: '+', label: 'Cases' },
  { value: '4', suffix: 'M+', label: 'Aligners' },
  { value: '20', suffix: '+', label: 'Countries' },
  { value: '120', suffix: '+', label: 'Employees' },
];

const clearAdvantages = [
  {
    icon: <Eye className="w-7 h-7" />,
    title: 'Invisible & Discreet',
    description:
      'Orthero clear aligners are virtually invisible, so you can smile confidently without worrying about the noticeable appearance of metal braces.',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Effective & Efficient',
    description:
      'With Orthero clear aligners, you can achieve your desired smile faster and more efficiently than you might expect. Many patients start seeing results in just a few months, putting you on the fast track to a smile transformation.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Customized for You',
    description:
      'Each aligner is custom-made to fit your teeth perfectly, ensuring optimal comfort and precise results. Using advanced 3D scanning technology, we create a detailed digital model of your teeth, allowing us to design aligners that snugly fit your unique dental anatomy.',
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Comfortable & Removable',
    description:
      'Unlike traditional braces, Orthero clear aligners are smooth and removable. Enjoy your favorite foods, maintain your regular oral hygiene routine, and live your life without interruption.',
  },
];

const malocclusions = [
  { name: 'Crowding', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_crowding-3.webp' },
  { name: 'Overbite', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_overbite-2.webp' },
  { name: 'Open Bite', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_openbite-2.webp' },
  { name: 'Spacing', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_spacing-3.webp' },
  { name: 'Crossbite', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_crossbite-2.webp' },
  { name: 'Deep Bite', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_deep_bite-2.webp' },
  { name: 'Underbite', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_underbite-2.webp' },
  { name: 'Kids', image: 'https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_kids-2.webp' },
];

const newsItems = [
  {
    date: 'Mar 15, 2026',
    title: 'Modern Ortodonti Tedavi Yontemleri ve Orthero ile Dis Duzelten Teknolojiler',
    image: 'https://ortheroaligner.com/wp-content/uploads/2026/03/Modern-Ortodonti-Tedavi-Yontemleri.webp',
  },
  {
    date: 'Mar 10, 2026',
    title: 'Dijital Ortodonti Tedavi Asamalari ve Orthero ile Gulus Tasarimi',
    image: 'https://ortheroaligner.com/wp-content/uploads/2026/03/Dijital-Ortodonti-Tedavi-Asamalari.webp',
  },
  {
    date: 'Mar 5, 2026',
    title: 'Aralikli Disleri Birlestirme Yontemleri ve Modern Ortodonti Cozumleri',
    image: 'https://ortheroaligner.com/wp-content/uploads/2026/03/Aralikli-Disleri-Birlestirme-Yontemleri.webp',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Stats Section */}
      <section className="py-10 bg-gradient-to-r from-[#BB1AA0] to-[#9A1780]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-1">
                  <span className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl">{stat.value}</span>
                  <span className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">{stat.suffix}</span>
                </div>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advanced Digital Orthodontics Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#4C1D95] mb-6 leading-tight">
                Advanced Digital Orthodontics
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Orthero leverages advanced 3D scanning and design technology within the field of aesthetic orthodontics. This allows us to create personalized, clear aligner treatment plans for optimal tooth movement.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a commitment to excellence and precision, we combine cutting-edge techniques with the highest standards of quality. This ensures that our aligners are not only effective but also safe for optimal oral health.
              </p>
              <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />} asChild>
                <Link href="/advantages">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_image_1-scaled.webp"
                  alt="Advanced Digital Orthodontics"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#BB1AA0] to-[#9A1780] rounded-2xl -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* Discover the Clear Advantage Section */}
      <section className="py-16 md:py-24 bg-[#F0F7FF]">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#4C1D95] mb-4">
              Discover the Clear Advantage
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
              Experience the next generation of orthodontic treatment with Orthero. Designed with cutting-edge technology and patient comfort in mind, Orthero clear aligners offer a superior alternative to traditional braces.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Here&apos;s why choosing Orthero will make all the difference in your smile journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {clearAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#BB1AA0]/10 flex items-center justify-center flex-shrink-0">
                    <div className="text-[#BB1AA0]">{advantage.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg md:text-xl text-[#4C1D95] mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Different Problems, One Solution Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#4C1D95] mb-4">
                Different Problems, One Solution
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Orthero clear aligners are clinically proven to treat cases of different malocclusions or teeth misalignment, effectively moving the teeth with precision and accuracy.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_3d_aligners.webp"
                  alt="3D Aligners"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-gray-600 mb-6">
                See other malocclusions that can be treated by Orthero.
              </p>
              <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />} asChild>
                <Link href="/treatable-cases">See More</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
              {malocclusions.map((item, index) => (
                <Link 
                  key={index}
                  href="/treatable-cases"
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-heading font-semibold text-sm md:text-base text-white">{item.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Engineered for Success Section */}
      <section className="py-16 md:py-24 bg-[#F0F7FF]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://ortheroaligner.com/wp-content/uploads/2025/12/orthero-global-image-new-scaled.webp"
                  alt="Engineered for Success"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#4C1D95] mb-4">
                Engineered for Success
              </h2>
              <p className="font-heading font-semibold text-lg md:text-xl text-[#4C1D95] mb-4">
                Expertise, Technology, and Cutting-Edge Products.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Orthero, we believe success is the culmination of exceptional people, advanced technology, and clinically proven products. Our team of dental experts combines their expertise with the latest advancements in orthodontics to ensure the success of your treatment.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We utilize one of the most advanced and comprehensive treatment planning software available in the industry. This cutting-edge tool guarantees the precision, accuracy, and effectiveness of your treatment and optimal results.
              </p>
              <p className="text-gray-700 font-medium mb-6">
                Discover the seamless Orthero Treatment Process.
              </p>
              <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />} asChild>
                <Link href="/treatment-process">Discover More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The Clear Difference Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#4C1D95] mb-4">
                The Clear Difference
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Discover the unparalleled advancements within Orthero&apos;s clear aligner technology, providing exceptional strength, comfort, and precision. From our state-of-the-art 3D layer modeling to the integration of CBCT and beyond, we continually redefine the standards of clear aligner excellence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience the remarkable difference today and unlock the potential of your smile transformation with Orthero.
              </p>
              <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />} asChild>
                <Link href="/differences">See the Difference</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://ortheroaligner.com/wp-content/uploads/2024/08/orthero_global_the_clear_difference-1-scaled.webp"
                alt="The Clear Difference"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-[#F0F7FF]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#4C1D95] mb-4">
                News and Media
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Discover the latest news, innovations, and media coverage about Orthero. Stay informed on our advancements in orthodontic technology and success stories from around the world.
              </p>
            </div>
            <Link
              href="/news-media"
              className="text-[#BB1AA0] font-semibold hover:text-[#9A1780] transition-colors flex items-center gap-2 mt-4 md:mt-0"
            >
              See More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-base md:text-lg text-[#4C1D95] mb-3 group-hover:text-[#BB1AA0] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#BB1AA0] to-[#9A1780]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                Learn more how Orthero can change your smile.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#BB1AA0] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/advantages"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#BB1AA0] transition-all duration-200"
              >
                Advantages
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection
        title="The Clearest Way of Changing Your Smile"
        description="Subscribe to our newsletter"
      />
    </>
  );
}
