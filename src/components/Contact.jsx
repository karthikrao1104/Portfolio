import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personal } from '../data/personal';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Clean simulation ready for EmailJS or Node backend
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-surface-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-wider text-eyebrow uppercase mb-2">
            07 — CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
            Let's connect and build something meaningful.
          </h2>
          <p className="text-base text-muted max-w-2xl">
            Have an opportunity, an interesting idea, or a project in mind? I would be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-clean rounded-2xl p-7 bg-surface-white space-y-5">
              <h3 className="text-lg font-bold text-primary">
                Direct Channels
              </h3>

              <div className="space-y-3.5">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-surface-alt hover:bg-surface-section border border-surface-border transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-surface-white border border-surface-border text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-medium text-eyebrow uppercase">Email</div>
                    <div className="text-sm font-semibold text-primary mt-0.5">
                      {personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-surface-alt hover:bg-surface-section border border-surface-border transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-surface-white border border-surface-border text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-medium text-eyebrow uppercase">Phone</div>
                    <div className="text-sm font-semibold text-primary mt-0.5">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-surface-alt border border-surface-border">
                  <div className="p-2 rounded-lg bg-surface-white border border-surface-border text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-medium text-eyebrow uppercase">Location</div>
                    <div className="text-sm font-semibold text-primary mt-0.5">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-surface-border flex items-center space-x-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-primary bg-surface-alt hover:bg-surface-section border border-surface-border transition-colors"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold text-primary bg-surface-alt hover:bg-surface-section border border-surface-border transition-colors"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-clean rounded-2xl p-7 sm:p-9 bg-surface-white">
              {status.submitted ? (
                <div className="py-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Message Dispatched</h3>
                  <p className="text-sm text-muted max-w-md">
                    Thank you for reaching out. You can also send a direct email to{' '}
                    <span className="font-semibold text-primary">{personal.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="mt-3 px-5 py-2 text-xs font-semibold bg-surface-alt hover:bg-surface-section border border-surface-border text-primary rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-medium uppercase text-eyebrow mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-2.5 rounded-lg bg-surface-white border ${
                          errors.name ? 'border-red-500' : 'border-surface-border focus:border-primary'
                        } text-sm text-primary placeholder:text-muted focus:outline-none transition-colors`}
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
                      <label className="block text-xs font-mono font-medium uppercase text-eyebrow mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-surface-white border ${
                          errors.email ? 'border-red-500' : 'border-surface-border focus:border-primary'
                        } text-sm text-primary placeholder:text-muted focus:outline-none transition-colors`}
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
                    <label className="block text-xs font-mono font-medium uppercase text-eyebrow mb-2">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Discussion / Collaboration"
                      className={`w-full px-4 py-2.5 rounded-lg bg-surface-white border ${
                        errors.subject ? 'border-red-500' : 'border-surface-border focus:border-primary'
                      } text-sm text-primary placeholder:text-muted focus:outline-none transition-colors`}
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
                    <label className="block text-xs font-mono font-medium uppercase text-eyebrow mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about the role, project, or topic..."
                      className={`w-full px-4 py-2.5 rounded-lg bg-surface-white border ${
                        errors.message ? 'border-red-500' : 'border-surface-border focus:border-primary'
                      } text-sm text-primary placeholder:text-muted focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 font-mono mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-surface-white bg-primary hover:bg-black transition-colors active:scale-95 disabled:opacity-50"
                    >
                      {status.submitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <span className="text-xs font-mono text-muted">
                      Ready for EmailJS / SMTP
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
