import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Download, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../data/courses';
import {
  downloadCurriculumForCourse,
  getCurriculumForCourse,
  triggerPostApplicationDownloads,
  type ApplicationFormData,
} from '../utils/courseApplicationPdf';

const emptyForm: ApplicationFormData = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  qualification: '',
  city: '',
  message: '',
};

export function ExploreCoursesPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<ApplicationFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      setForm((prev) => ({ ...prev, course: courseParam }));
    }
  }, [searchParams]);

  const update = (field: keyof ApplicationFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !form.course || !form.qualification.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    triggerPostApplicationDownloads(form);
  };

  const selectCourse = (name: string) => {
    update('course', name);
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedCurriculum = form.course ? getCurriculumForCourse(form.course) : undefined;

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-16 px-6 md:px-8 bg-[var(--navy)]">
        <div className="max-w-[1440px] mx-auto">
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm uppercase tracking-[0.2em] text-[var(--yellow)] mb-4"
          >
            Enroll Today
          </p>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Explore Courses
          </h1>
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-white/85 text-lg max-w-2xl">
            Choose a program and submit your application. Curriculum PDFs are available for Data
            Science with AI, Core Python, and AI Mastery.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-3xl text-[var(--navy)] mb-8"
          >
            Available Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => {
              const Icon = course.icon;
              const selected = form.course === course.name;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => selectCourse(course.name)}
                  className={`text-left bg-white border p-6 rounded-xl transition-all ${
                    selected
                      ? 'border-[var(--yellow)] ring-2 ring-[var(--yellow)]/40 shadow-lg'
                      : 'border-gray-200 hover:border-[var(--yellow)] hover:shadow-md'
                  }`}
                >
                  <Icon className="w-9 h-9 mb-3 text-[var(--navy)]" strokeWidth={1.5} />
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-lg text-[var(--navy)] mb-2"
                  >
                    {course.name}
                  </h3>
                  <p
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="text-sm text-[var(--navy)]/65 mb-3"
                  >
                    {course.summary}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs ${
                      course.level === 'Beginner'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {course.duration} · {course.level}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="application-form" className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl text-[var(--navy)] mb-4"
            >
              Application Form
            </h2>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-[var(--navy)]/75 leading-relaxed mb-6"
            >
              Complete the form below and select your course.
              {selectedCurriculum ? (
                <>
                  {' '}
                  After submit, the <strong>curriculum PDF for that course</strong> will download.
                </>
              ) : (
                <> Full Stack programs can be applied for now; curriculum PDFs will be added later.</>
              )}
            </p>
            {selectedCurriculum ? (
              <p
                className="flex gap-3 text-[var(--navy)]/80"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Download className="w-5 h-5 text-[var(--yellow)] shrink-0 mt-0.5" />
                <span>You will receive: {selectedCurriculum.title} Curriculum</span>
              </p>
            ) : form.course ? (
              <p className="text-[var(--navy)]/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                No curriculum PDF for this course yet. Submit your application and our team will
                contact you.
              </p>
            ) : (
              <p className="text-[var(--navy)]/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Select a course to apply. PDF download is available for Data Science, Core Python,
                and AI Mastery.
              </p>
            )}
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-2xl text-[var(--navy)] mb-3"
                >
                  Application submitted successfully
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="text-[var(--navy)]/80 mb-6"
                >
                  Thank you, {form.fullName}. Your application for{' '}
                  <strong>{form.course}</strong> was received.
                  {selectedCurriculum
                    ? ' Your curriculum PDF should have started downloading.'
                    : ' Our team will contact you with batch details soon.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {getCurriculumForCourse(form.course) && (
                    <button
                      type="button"
                      onClick={() => downloadCurriculumForCourse(form.course)}
                      className="inline-flex items-center gap-2 bg-[var(--yellow)] text-[var(--navy)] px-5 py-2.5 rounded-lg hover:bg-[#E0B015] transition-colors text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Download className="w-4 h-4" />
                      Download {getCurriculumForCourse(form.course)!.title} Curriculum
                    </button>
                  )}
                  <Link
                    to="/"
                    className="inline-flex items-center px-5 py-2.5 text-[var(--navy)] hover:underline text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)]"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                      City
                    </label>
                    <input
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)]"
                      placeholder="Vijayawada"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                      Course *
                    </label>
                    <select
                      required
                      value={form.course}
                      onChange={(e) => update('course', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)] bg-white"
                    >
                      <option value="">Select a course</option>
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                      Qualification *
                    </label>
                    <input
                      required
                      value={form.qualification}
                      onChange={(e) => update('qualification', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)]"
                      placeholder="B.Tech / B.Sc / Diploma"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--navy)] mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>
                    Message (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--navy)] resize-none"
                    placeholder="Tell us about your goals or preferred batch timing"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[var(--yellow)] text-[var(--navy)] px-8 py-3.5 rounded-lg hover:bg-[#E0B015] transition-colors font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {selectedCurriculum ? 'Submit & download curriculum' : 'Submit application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
