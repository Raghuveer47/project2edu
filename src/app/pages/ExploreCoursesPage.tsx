import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Download, CheckCircle2 } from 'lucide-react';
import { COURSE_CATEGORY_ORDER, getCourseByName, getCoursesByCategory, type CourseCategory } from '../data/courses';
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
  const [courseCategory, setCourseCategory] = useState<CourseCategory | ''>('');

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      const matched = getCourseByName(courseParam);
      if (matched) {
        setCourseCategory(matched.category);
        setForm((prev) => ({ ...prev, course: matched.name }));
      }
    }
  }, [searchParams]);

  const update = (field: keyof ApplicationFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleCategoryChange = (category: CourseCategory | '') => {
    setCourseCategory(category);
    setForm((prev) => ({ ...prev, course: '' }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !courseCategory || !form.course || !form.qualification.trim()) {
      setError('Please fill in all required fields and select a course category and course.');
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
    const matched = getCourseByName(name);
    if (!matched) return;
    setCourseCategory(matched.category);
    update('course', name);
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const coursesInCategory = courseCategory ? getCoursesByCategory(courseCategory) : [];

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
            Choose a program and submit your application. Curriculum PDFs are available for select
            advanced programs including Data Science & Analytics, Python (Entry Level), and AI & ML.
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
          <div className="space-y-12">
            {COURSE_CATEGORY_ORDER.map((category) => {
              const courses = getCoursesByCategory(category);
              return (
                <div key={category}>
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="mb-5 text-2xl text-[var(--navy)]"
                  >
                    {category}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => {
                      const Icon = course.icon;
                      const selected = form.course === course.name;
                      return (
                        <button
                          key={course.id}
                          type="button"
                          onClick={() => selectCourse(course.name)}
                          className={`rounded-xl border p-5 text-left transition-all sm:p-6 ${
                            selected
                              ? 'border-[var(--yellow)] shadow-lg ring-2 ring-[var(--yellow)]/40'
                              : 'border-gray-200 bg-white hover:border-[var(--yellow)] hover:shadow-md'
                          }`}
                        >
                          <Icon className="mb-3 h-9 w-9 text-[var(--navy)]" strokeWidth={1.5} />
                          <h4
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="mb-2 text-lg text-[var(--navy)]"
                          >
                            {course.name}
                          </h4>
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
              Complete the form below. First choose a <strong>course category</strong>, then pick your
              course from that list.
              {selectedCurriculum ? (
                <>
                  {' '}
                  After submit, the <strong>curriculum PDF for that course</strong> will download.
                </>
              ) : (
                <> Most courses can be applied for now; curriculum PDFs are available for select programs.</>
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
                Select a course to apply. PDF download is available for Data Science & Analytics,
                Python (Entry Level), and AI & Machine Learning.
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
                      placeholder="+91 XXXXX XXXXX"
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
                      Course Category *
                    </label>
                    <select
                      required
                      value={courseCategory}
                      onChange={(e) => handleCategoryChange(e.target.value as CourseCategory | '')}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                    >
                      <option value="">Select category</option>
                      {COURSE_CATEGORY_ORDER.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Course *
                    </label>
                    <select
                      required
                      value={form.course}
                      disabled={!courseCategory}
                      onChange={(e) => update('course', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[var(--navy)] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">
                        {courseCategory ? 'Select course' : 'Select a category first'}
                      </option>
                      {coursesInCategory.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                    Qualification *
                  </label>
                  <input
                    required
                    value={form.qualification}
                    onChange={(e) => update('qualification', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none sm:max-w-md"
                    placeholder="B.Tech / B.Sc / Diploma"
                  />
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
