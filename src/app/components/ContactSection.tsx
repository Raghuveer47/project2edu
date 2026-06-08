import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-[var(--navy)] px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="mb-8 text-3xl text-white sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Connect
            </h2>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[var(--yellow)]" />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-white">
                    C2C Tech Solutions Pvt Ltd
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-white/80">
                    Vijayawada, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 shrink-0 text-[var(--yellow)]" />
                <p style={{ fontFamily: 'var(--font-body)' }} className="text-white">
                  +91 XXX XXX XXXX
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-6 w-6 shrink-0 text-[var(--yellow)]" />
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="break-all text-white sm:break-normal"
                >
                  info@c2ctechsolutions.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                style={{ fontFamily: 'var(--font-body)' }}
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                style={{ fontFamily: 'var(--font-body)' }}
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                style={{ fontFamily: 'var(--font-body)' }}
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--yellow)] px-8 py-3 text-[var(--navy)] transition-colors hover:bg-[#E0B015]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-white/20 pt-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="max-w-sm text-sm text-white/60 sm:max-w-none"
          >
            © 2026 C2C Tech Solutions Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-3 sm:gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--yellow)] hover:text-[var(--navy)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--yellow)] hover:text-[var(--navy)]"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--yellow)] hover:text-[var(--navy)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <a
            href="https://c2ctechsolutions.com"
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm text-[var(--yellow)] hover:underline"
          >
            www.c2ctechsolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}
