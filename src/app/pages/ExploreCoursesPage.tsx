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
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const selectedCurriculum = form.course ? getCurriculumForCourse(form.course) : undefined;

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-[var(--navy)] px-6 py-16 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--yellow)]"
          >
            Enroll Today
          </p>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="mb-4 text-4xl text-white md:text-5xl"
          >
            Explore Courses
          </h1>
          <p style={{ fontFamily: 'var(--font-body)' }} className="max-w-2xl text-lg text-white/85">
            Choose a program and submit your application. Curriculum PDFs are available for Data
            Science with AI, Core Python, and AI Mastery.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="mb-8 text-3xl text-[var(--navy)]"
          >
            Available Programs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => {
              const Icon = course.icon;
              const selected = form.course === course.name;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => selectCourse(course.name)}
                  className={`rounded-xl border bg-white p-6 text-left transition-all ${
                    selected
                      ? 'border-[var(--yellow)] shadow-lg ring-2 ring-[var(--yellow)]/40'
                      : 'border-gray-200 hover:border-[var(--yellow)] hover:shadow-md'
                  }`}
                >
                  <Icon className="mb-3 h-9 w-9 text-[var(--navy)]" strokeWidth={1.5} />
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="mb-2 text-lg text-[var(--navy)]"
                  >
                    {course.name}
                  </h3>
                  <p
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="mb-3 text-sm text-[var(--navy)]/65"
                  >
                    {course.summary}
                  </p>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs ${
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

      <section id="application-form" className="bg-white px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="mb-4 text-3xl text-[var(--navy)]"
            >
              Application Form
            </h2>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="mb-6 leading-relaxed text-[var(--navy)]/75"
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
                <Download className="mt-0.5 h-5 w-5 shrink-0 text-[var(--yellow)]" />
                <span>You will receive: {selectedCurriculum.title} Curriculum</span>
              </p>
            ) : form.course ? (
              <p className="text-sm text-[var(--navy)]/70" style={{ fontFamily: 'var(--font-body)' }}>
                No curriculum PDF for this course yet. Submit your application and our team will
                contact you.
              </p>
            ) : (
              <p className="text-sm text-[var(--navy)]/70" style={{ fontFamily: 'var(--font-body)' }}>
                Select a course to apply. PDF download is available for Data Science, Core Python,
                and AI Mastery.
              </p>
            )}
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
                <CheckCircle2 className="mb-4 h-12 w-12 text-green-600" />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="mb-3 text-2xl text-[var(--navy)]"
                >
                  Application submitted successfully
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="mb-6 text-[var(--navy)]/80"
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
                      className="inline-flex items-center gap-2 rounded-lg bg-[var(--yellow)] px-5 py-2.5 text-sm text-[var(--navy)] transition-colors hover:bg-[#E0B015]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Download className="h-4 w-4" />
                      Download {getCurriculumForCourse(form.course)!.title} Curriculum
                    </button>
                  )}
                  <Link
                    to="/"
                    className="inline-flex items-center px-5 py-2.5 text-sm text-[var(--navy)] hover:underline"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="+91 70931 82525"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      City
                    </label>
                    <input
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="Vijayawada"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Course *
                    </label>
                    <select
                      required
                      value={form.course}
                      onChange={(e) => update('course', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
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
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Qualification *
                    </label>
                    <input
                      required
                      value={form.qualification}
                      onChange={(e) => update('qualification', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="B.Tech / B.Sc / Diploma"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                    Message (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                    placeholder="Tell us about your goals or preferred batch timing"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600" style={{ fontFamily: 'var(--font-body)' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--yellow)] px-8 py-3.5 font-medium text-[var(--navy)] transition-colors hover:bg-[#E0B015] sm:w-auto"
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
