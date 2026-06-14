import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqzaorr';
const FORMSPREE_PLACEHOLDER = 'PASTE_YOUR_FORMSPREE_ENDPOINT_HERE';
const sectionMotion = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };
const inputClass =
  'rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none smooth-motion placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white';

function Contact() {
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT === FORMSPREE_PLACEHOLDER) {
      setStatus('error');
      setStatusMessage('Formspree endpoint is not added yet.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
      setStatusMessage('Message sent successfully. I will get back to you soon.');
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-900/30">
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={sectionMotion}
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let's build something thoughtful.</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Have a project idea, collaboration, or opportunity? Send a message and I will get back to you.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="mailto:zainmalik3618@gmail.com"
              className="flex items-center gap-3 text-sm font-medium text-slate-700 smooth-motion hover:text-emerald-800 dark:text-slate-200 dark:hover:text-emerald-200"
            >
              <Mail size={18} />
              zainmalik3618@gmail.com
            </a>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              <MapPin size={18} />
              Available for remote projects
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...sectionMotion, delay: 0.05 }}
          className="panel p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <input type="hidden" name="_subject" value="New portfolio contact message" />

            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project"
                className={`${inputClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 smooth-lift hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:hover:translate-y-0 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
            >
              <Send size={17} />
              {status === 'loading' ? 'Sending...' : 'Submit'}
            </button>

            {statusMessage && (
              <p
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  status === 'success'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200'
                    : 'bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-200'
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
