'use client';

import { useState } from 'react';
import { Container, HeroSection, CTASection, Button, Input, Textarea, Card } from '@/components';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const addresses = [
  {
    title: 'Headquarters',
    address: 'İTÜ Ayazağa Kampüsü, Arı Teknokent ARI 1, No:2/5/30, Sarıyer / İstanbul, TÜRKİYE',
    icon: MapPin,
  },
  {
    title: 'Production & Dental Lab',
    address: 'Maslak Mahallesi, Büyükdere Caddesi, Noramin İş Merkezi Sitesi, No:237, İç Kapı No:407, Sarıyer / İstanbul, TÜRKİYE',
    icon: MapPin,
  },
  {
    title: 'Production Facility',
    address: 'Bruszewska 28, 03-046 Warszawa, Poland',
    icon: MapPin,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <HeroSection
        badge="Contact Us"
        title="Get In Touch with Us"
        subtitle="We're here to help with any questions or support you need. Reach out to our dedicated team for assistance."
        primaryCta={{ text: 'Call Now', href: 'tel:+908504332210' }}
        size="md"
      />

      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6 text-neutral-800">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-green-800 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 mb-2">
                    Thank you for visiting us here at Orthero!
                  </p>
                  <p className="text-green-600">
                    We&apos;ve received your message, and a member of our team will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSubmitting && (
                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-3 text-primary-700">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Your message is being sent...</span>
                      </div>
                      <p className="text-sm text-primary-600 mt-2">
                        Please wait for the confirmation message before going back or closing your browser.
                      </p>
                    </div>
                  )}

                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    disabled={isSubmitting}
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-5 h-5" />}
                    className="w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6 text-neutral-800">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:+908504332210"
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Call us at</p>
                    <p className="font-semibold text-neutral-800">+90 850 433 22 10</p>
                  </div>
                </a>

                <a
                  href="mailto:info@orthero.com"
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email us at</p>
                    <p className="font-semibold text-neutral-800">info@orthero.com</p>
                  </div>
                </a>
              </div>

              <h3 className="font-heading font-bold text-xl mb-4 text-neutral-800">
                Our Locations
              </h3>

              <div className="space-y-4">
                {addresses.map((location, index) => (
                  <Card key={index} padding="sm" className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <location.icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">
                        {location.title}
                      </h4>
                      <p className="text-sm text-neutral-600">{location.address}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Learn More How Orthero Can Change Your Smile"
        primaryCta={{ text: 'Start Treatment', href: '/treatment-process' }}
        variant="secondary"
      />
    </>
  );
}
