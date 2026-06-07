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
    <section id="contact" className="py-[120px] px-8 bg-[var(--navy)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-16 mb-16">
          {/* Left: Contact Info */}
          <div>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-5xl text-white mb-8"
            >
              Let's Connect
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--yellow)] flex-shrink-0 mt-1" />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-white">
                    C2C Tech Solutions Pvt Ltd
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-white opacity-80">
                    Vijayawada, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[var(--yellow)]" />
                <p style={{ fontFamily: 'var(--font-body)' }} className="text-white">
                  +91 XXX XXX XXXX
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[var(--yellow)]" />
                <p style={{ fontFamily: 'var(--font-body)' }} className="text-white">
                  info@c2ctechsolutions.com
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--yellow)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--yellow)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--yellow)] resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--yellow)] text-[var(--navy)] px-8 py-3 rounded-lg hover:bg-[#E0B015] transition-colors w-full"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 flex items-center justify-between">
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-white opacity-60 text-sm">
            © 2026 C2C Tech Solutions Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--yellow)] hover:text-[var(--navy)] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--yellow)] hover:text-[var(--navy)] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--yellow)] hover:text-[var(--navy)] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <a
            href="https://c2ctechsolutions.com"
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-[var(--yellow)] hover:underline text-sm"
          >
            www.c2ctechsolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}
