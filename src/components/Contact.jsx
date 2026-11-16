import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Icons } from './BrandIcons';
import { personalData } from '../data/portfolioData';

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
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
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

    // Simulate reliable dispatch structure ready for EmailJS / Backend
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-2">
            Let's build something meaningful.
          </h2>
          <p className="text-sm font-mono text-[#8E8E93] uppercase tracking-wider">
            Have an opportunity, an interesting idea, or a project in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-light text-white tracking-tight">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-[#A1A1A6] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93]">Email</div>
                    <div className="text-sm text-neutral-200 font-medium group-hover:text-white transition-colors">
                      {personalData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-[#A1A1A6] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93]">Phone</div>
                    <div className="text-sm text-neutral-200 font-medium group-hover:text-white transition-colors">
                      {personalData.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-white/5 text-[#A1A1A6]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93]">Location</div>
                    <div className="text-sm text-neutral-200 font-medium">
                      {personalData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 border-t border-white/10 flex items-center space-x-3">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-mono text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-mono text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/[0.08]">
              {status.submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-light text-white">Thank you for your message!</h3>
                  <p className="text-sm text-neutral-400 max-w-md font-light">
                    Your inquiry has been received. You can also reach out directly at{' '}
                    <span className="text-white underline">{personalData.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A6] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-white/30'
                        } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A6] mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                          errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-white/30'
                        } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A6] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Collaboration / Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.subject ? 'border-red-500/60' : 'border-white/10 focus:border-white/30'
                      } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A6] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-white/30'
                      } text-white placeholder-neutral-600 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 disabled:opacity-50"
                    >
                      {status.submitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] font-mono text-[#8E8E93] ml-4">
                      Integration-ready dispatch structure
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
