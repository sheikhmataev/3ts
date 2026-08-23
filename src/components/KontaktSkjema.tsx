'use client';

import { useState } from "react";

const fieldBase =
  "w-full px-4 py-3 bg-surface border border-line-strong text-ink placeholder:text-muted/70 focus:outline-none focus:border-ink focus:ring-2 focus:ring-accent transition-colors";

export default function KontaktSkjema() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', subject: '', message: '', consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailBody = `
Navn: ${formData.name}
Bedrift: ${formData.company}
E-post: ${formData.email}
Telefon: ${formData.phone}
Emne: ${formData.subject}

Melding:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:kontakt@3ts.no?subject=${encodeURIComponent(`${formData.subject} - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '', consent: false });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section id="kontakt-skjema" className="py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="display text-3xl lg:text-4xl font-semibold mb-4">Send oss en melding</h2>
            <p className="lede text-muted leading-relaxed max-w-sm">
              Fyll ut skjemaet under, så kontakter vi deg så snart som mulig
            </p>
          </div>

          <div className="lg:col-span-8">
            {submitStatus === 'success' && (
              <p role="status" className="mb-8 border-l-4 border-accent bg-surface px-5 py-4 text-sm text-ink">
                Meldingen din er sendt! Vi kontakter deg så snart som mulig.
              </p>
            )}

            {submitStatus === 'error' && (
              <p role="alert" className="mb-8 border-l-4 border-ink bg-surface px-5 py-4 text-sm text-ink">
                Noe gikk galt. Vennligst prøv igjen eller kontakt oss direkte.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Navn *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className={fieldBase} placeholder="Ditt navn" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium">Bedrift</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className={fieldBase} placeholder="Bedriftsnavn" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">E-post *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldBase} placeholder="din@epost.no" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={fieldBase} placeholder="Ditt telefonnummer" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium">Emne *</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className={fieldBase}>
                  <option value="">Velg emne</option>
                  <option value="prosjekt">Nytt prosjekt</option>
                  <option value="service">Service og vedlikehold</option>
                  <option value="produkter">Produktbestilling</option>
                  <option value="annet">Annet</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Melding *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={6} required className={`${fieldBase} resize-y`} placeholder="Beskriv ditt prosjekt eller spørsmål..." />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 accent-[#ffd706] border border-line-strong"
                />
                <label htmlFor="consent" className="text-sm text-muted leading-relaxed">
                  Jeg samtykker til at 3TS Industriservice AS kan kontakte meg angående min henvendelse *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-accent text-accent-ink font-semibold hover:bg-accent-hover active:translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0"
              >
                {isSubmitting ? 'Sender...' : 'Send melding'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
