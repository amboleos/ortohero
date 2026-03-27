import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, HeroSection, CTASection, Card, Button } from '@/components';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Media - Orthero',
  description:
    'Discover the latest news, innovations, and media coverage about Orthero. Stay informed on our advancements in orthodontic technology.',
};

const featuredArticles = [
  {
    title: 'Braces or Clear Aligners: Which One is Right for You?',
    excerpt:
      'A comprehensive comparison of traditional braces and modern clear aligner technology.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    date: 'Mar 20, 2026',
    category: 'Patient Guide',
    readTime: '5 min read',
  },
  {
    title: 'How Long Does Orthero Clear Aligner Treatment Take?',
    excerpt:
      'Understanding treatment timelines and factors that influence your orthodontic journey.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    date: 'Mar 18, 2026',
    category: 'Treatment',
    readTime: '4 min read',
  },
  {
    title: 'The Orthero Experience: Real Patient Success Stories',
    excerpt:
      'Hear from patients who have transformed their smiles with Orthero clear aligners.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    date: 'Mar 15, 2026',
    category: 'Success Stories',
    readTime: '6 min read',
  },
];

const professionalArticles = [
  {
    title: 'Take Your Orthodontic Practice into the Future with Orthero',
    category: 'Professional',
  },
  {
    title: 'CBCT Integrated Tech in Clear Aligners',
    category: 'Technology',
  },
  {
    title: 'Orthero Aligner 3-Layer Technology',
    category: 'Innovation',
  },
  {
    title: 'Herotain Retainers: Advanced Retention Solutions',
    category: 'Products',
  },
  {
    title: 'Mandibular Auto-Rotation in Orthero Aligners',
    category: 'Technology',
  },
  {
    title: 'Enhancing Orthodontic Care with Double Layer Attachment Templates',
    category: 'Professional',
  },
];

const categories = ['All', 'Patient Guide', 'Treatment', 'Success Stories', 'Technology', 'Professional'];

export default function NewsMediaPage() {
  return (
    <>
      <HeroSection
        badge="News & Media"
        title="Orthero Aligner 3-Layer Technology"
        subtitle="Discover the latest news, innovations, and media coverage about Orthero. Stay informed on our advancements in orthodontic technology and success stories from around the world."
        primaryCta={{ text: 'Contact Us', href: '/contact' }}
        size="md"
      />

      {/* Categories */}
      <section className="py-8 border-b border-neutral-200">
        <Container>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
                Featured
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800">
                Latest Articles
              </h2>
            </div>
            <Link
              href="#"
              className="text-primary-500 font-semibold hover:text-primary-600 transition-colors flex items-center gap-2 mt-4 md:mt-0"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-600">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-800 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 text-sm line-clamp-2">{article.excerpt}</p>
                  <div className="mt-4">
                    <span className="text-primary-500 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Professional Articles */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-600 text-sm font-semibold mb-4">
                For Professionals
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-800 mb-4">
                Professional Resources
              </h2>
              <p className="text-neutral-600 mb-6">
                In-depth articles for orthodontic professionals looking to enhance their practice
                with Orthero technology.
              </p>
              <Button variant="outline" asChild>
                <Link href="#">View All Professional Articles</Link>
              </Button>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {professionalArticles.map((article, index) => (
                  <Card
                    key={index}
                    padding="sm"
                    className="group cursor-pointer hover:bg-primary-50"
                  >
                    <span className="text-xs font-medium text-secondary-600 mb-2 block">
                      {article.category}
                    </span>
                    <h3 className="font-semibold text-neutral-800 group-hover:text-primary-500 transition-colors">
                      {article.title}
                    </h3>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <Container>
          <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                Stay Updated with Orthero
              </h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter to receive the latest news, innovations, and exclusive
                content directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button
                  type="submit"
                  className="bg-white text-primary-600 hover:bg-neutral-100"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Learn More How Orthero Can Change Your Smile"
        primaryCta={{ text: 'Get Started', href: '/contact' }}
        variant="primary"
      />
    </>
  );
}
