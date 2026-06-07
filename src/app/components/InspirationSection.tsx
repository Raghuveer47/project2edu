export function InspirationSection() {
  return (
    <section className="py-[120px] px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-3 gap-16">
          {/* Left: Label */}
          <div>
            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-sm text-[var(--navy)] tracking-widest opacity-60"
            >
              OUR ROOTS
            </p>
          </div>

          {/* Right: Content */}
          <div className="col-span-2">
            <div className="border-l-4 border-[var(--yellow)] pl-8">
              <p
                style={{ fontFamily: 'var(--font-body)' }}
                className="text-xl text-[var(--navy)] leading-relaxed opacity-90"
              >
                Our journey began at an MSME workshop in Vijayawada, where we witnessed Hon&apos;ble Chief
                Minister Chandrababu Naidu&apos;s vision for Andhra Pradesh&apos;s digital transformation. Inspired
                by his commitment to building a technology-driven ecosystem, we founded C2C Tech Solutions
                to bridge the gap between traditional education and the demands of AI & Quantum-ready
                industries. We are committed to making Andhra Pradesh a hub for next-generation talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
