import { useState } from 'react';

export default function ContactForm({ email }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Spam protection
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      setStatus('sent');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mb-12 contact-form">
      <h2 id="contact-heading" className="section-heading">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot — hidden from users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave empty</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-surface-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-surface-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-surface-700 mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-input resize-y"
              placeholder="How can I help you?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                       bg-accent-600 text-white rounded-md hover:bg-accent-700
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-200"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Status messages */}
          {status === 'sent' && (
            <p className="text-sm text-green-600 font-medium" role="alert">
              ✓ Thank you! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 font-medium" role="alert">
              Something went wrong. Please try emailing directly.
            </p>
          )}
        </form>

        {/* Direct contact */}
        <div className="space-y-4">
          <p className="text-sm text-surface-600 leading-relaxed">
            Prefer email? Feel free to reach out directly. I typically respond within 24 hours.
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
          <div className="mt-4 p-4 bg-surface-50 rounded-lg border border-surface-200">
            <h3 className="text-sm font-bold text-surface-800 mb-2">Open to:</h3>
            <ul className="space-y-1 text-sm text-surface-600">
              <li>• Internship opportunities (on-site & remote)</li>
              <li>• Freelance / contract AI projects</li>
              <li>• Open source collaboration</li>
              <li>• Hackathons and research collaborations</li>
              <li>• Speaking & mentoring opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
