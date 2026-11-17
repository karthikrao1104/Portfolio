import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personal } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // honeypot field for bot spam protection
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: err.message || 'Something went wrong while sending your message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-container p-8 sm:p-12">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 text-xs font-mono font-medium uppercase tracking-wider mb-3">
              <span>07 — CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Let's connect and build something meaningful.
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl">
              Have an opportunity, an interesting idea, or a project in mind? I would be happy to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-box p-7 space-y-5">
                <h3 className="text-lg font-bold text-neutral-900">
                  Direct Channels
                </h3>

                <div className="space-y-3.5">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-900">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-medium text-neutral-400 uppercase">Email</div>
                      <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                        {personal.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-900">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-medium text-neutral-400 uppercase">Phone</div>
                      <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                        {personal.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-900">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-medium text-neutral-400 uppercase">Location</div>
                      <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                        {personal.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-neutral-100 flex items-center space-x-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors"
                  >
                    <Icons.Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors"
                  >
                    <Icons.Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="card-box p-7 sm:p-9">
                {status.submitted ? (
                  <div className="py-10 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-900">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Message Dispatched</h3>
                    <p className="text-sm text-neutral-600 max-w-md">
                      Thank you for reaching out. You can also send a direct email to{' '}
                      <span className="font-semibold text-neutral-900">{personal.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                      className="mt-3 px-5 py-2 text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-900 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono font-medium uppercase text-neutral-500 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                            errors.name ? 'border-red-500' : 'border-neutral-200 focus:border-neutral-900'
                          } text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-600 font-mono mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono font-medium uppercase text-neutral-500 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. sarah@company.com"
                          className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                            errors.email ? 'border-red-500' : 'border-neutral-200 focus:border-neutral-900'
                          } text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 font-mono mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono font-medium uppercase text-neutral-500 mb-2">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Opportunity / Project Discussion / Collaboration"
                        className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                          errors.subject ? 'border-red-500' : 'border-neutral-200 focus:border-neutral-900'
                        } text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-red-600 font-mono mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono font-medium uppercase text-neutral-500 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share details about the role, project, or topic..."
                        className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                          errors.message ? 'border-red-500' : 'border-neutral-200 focus:border-neutral-900'
                        } text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 font-mono mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Honeypot field (hidden from real users, traps spam bots) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Server/API Error Notification */}
                    {status.error && (
                      <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start space-x-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{status.error}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="submit"
                        disabled={status.submitting}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 transition-colors active:scale-95 disabled:opacity-50"
                      >
                        {status.submitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <span className="text-xs font-mono text-neutral-400">
                        Vercel Serverless • Resend API
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
