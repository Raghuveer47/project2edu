import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import receptionHero from '../../assets/images/c2c-reception-hero.jpeg';
import training1 from '../../imports/WhatsApp_Image_2026-06-03_at_22.26.04.jpeg';
import training2 from '../../imports/WhatsApp_Image_2026-06-03_at_22.26.40.jpeg';
import ceremony1 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.19.jpeg';
import ceremony2 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.20.jpeg';
import ceremony3 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.21.jpeg';
import ceremony4 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.27.jpeg';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function TrainingGalleryPage() {
  const galleryImages = [
    {
      url: receptionHero,
      title: 'C2C Tech Solutions Reception',
      category: 'Office',
    },
    {
      url: training1,
      title: 'Interactive Training Session',
      category: 'Classroom Training',
    },
    {
      url: training2,
      title: 'Instructor-Led Learning',
      category: 'Workshop',
    },
    {
      url: ceremony1,
      title: 'Official Inauguration Ceremony',
      category: 'Special Event',
    },
    {
      url: ceremony2,
      title: 'Certificate Presentation',
      category: 'Achievement',
    },
    {
      url: ceremony3,
      title: 'Grand Opening Celebration',
      category: 'Special Event',
    },
    {
      url: ceremony4,
      title: 'Felicitation Ceremony',
      category: 'Special Event',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <Link
            to="/training"
            className="inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--yellow)] mb-6 transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Training
          </Link>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-5xl text-[var(--navy)] mb-4"
          >
            Training Gallery
          </h1>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-xl text-[var(--navy)] opacity-70 max-w-3xl"
          >
            Explore our comprehensive training programs, workshops, and hands-on learning experiences
            that transform students into industry-ready professionals.
          </p>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-[1440px] mx-auto">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="24px">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className="inline-block bg-[var(--yellow)] text-[var(--navy)] px-3 py-1 rounded-full text-sm mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {image.category}
                      </span>
                      <h3
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-white text-xl"
                      >
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      <section className="py-16 px-8 bg-[var(--navy)]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-4xl text-white mb-4"
          >
            Ready to Start Your Journey?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-white opacity-80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive
            training programs
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/training"
              className="bg-[var(--yellow)] text-[var(--navy)] px-8 py-3.5 rounded-lg hover:bg-[#E0B015] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Courses
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-[var(--navy)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
