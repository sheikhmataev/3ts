import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ClientMarquee from "@/components/ClientMarquee";
import { getImagePath } from "@/lib/images";

const stats = [
  { value: "25+", label: "År erfaring" },
  { value: "1997", label: "Sertifisert siden" },
  { value: "100+", label: "Prosjekter levert" },
  { value: "16+", label: "Fornøyde kunder" },
];

const services = [
  { num: "01", title: "Forprosjekt", desc: "Befaring, løsningsforslag og kostnadsestimater for alle prosjektstørrelser." },
  { num: "02", title: "3D Tegning", desc: "Visualisering i 3D slik at du ser resultatet klart og tydelig før oppstart." },
  { num: "03", title: "Prosjektgjennomføring", desc: "Totalansvar fra planlegging til igangkjøring innenfor tids- og kostnadsrammer." },
  { num: "04", title: "Service", desc: "Vedlikehold og service av prosessanlegg for optimal drift over tid." },
];

const tags = ["Næringsmiddelindustri", "Rustfritt stål", "3D-prosjektering", "Totalentreprise"];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "3TS Industriservice AS",
  description:
    "Sertifiserte sveisere og leverandør av komplette løsninger for prosessanlegg, primært innen næringsmiddel og energi.",
  url: "https://www.3ts.no",
  telephone: "+4790933503",
  email: "geir@3ts.no",
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrigata 50",
    postalCode: "2619",
    addressLocality: "Lillehammer",
    addressCountry: "NO",
  },
  geo: { "@type": "GeoCoordinates", latitude: 61.1315, longitude: 10.4366 },
  areaServed: "NO",
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Navigation />
      <main id="innhold">

      {/* Hero — full-bleed photograph, content anchored bottom-left */}
      <section className="relative min-h-[100dvh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/assets/bilde_med_bil.png")}
            alt="To montører fra 3TS Industriservice foran firmabilen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/60 to-[#0b0d0e]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d0e]/80 via-[#0b0d0e]/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 sm:pb-20">
          <div className="max-w-5xl">
            <h1 className="enter enter-1 display text-[#f2f2ee] text-[2.5rem] sm:text-5xl lg:text-[4.25rem] font-semibold mb-6">
              Sveising og <span className="text-accent">prosessanlegg</span><br />av høyeste klasse
            </h1>
            <p className="enter enter-2 lede text-[#c9ccce] text-base sm:text-lg leading-relaxed max-w-xl mb-9">
              Primært rettet mot næringsmiddel og energi. Vi har topp moderne utstyr for 3D-skanning, flytting av fabrikker og montering av linjer, og tar totalansvaret for prosjektet ditt.
            </p>
            <div className="enter enter-3 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="px-7 py-3.5 bg-accent text-accent-ink font-semibold hover:bg-accent-hover active:translate-y-px transition-all"
              >
                Få tilbud
              </Link>
              <Link
                href="/tjenester"
                className="px-7 py-3.5 border border-white/30 text-[#f2f2ee] font-semibold hover:border-[#f2f2ee] hover:bg-white/5 active:translate-y-px transition-all"
              >
                Se tjenester
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — signal band */}
      <section className="bg-accent text-accent-ink">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-8 lg:py-10 px-2 first:pl-0 border-t border-accent-ink/15 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:pl-8 lg:first:pl-0"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-mono text-4xl lg:text-5xl font-medium tracking-tighter tabular-nums">{s.value}</span>
                  <span className="block text-[13px] font-medium mt-2 opacity-75">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services — numbered register, no cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display text-4xl lg:text-5xl font-semibold mb-5">Hva vi tilbyr</h2>
              <p className="lede text-muted leading-relaxed max-w-sm mb-8">
                Komplette løsninger for prosessindustrien, ett selskap, totalansvar.
              </p>
              <Link
                href="/tjenester"
                className="group inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-accent pb-1 hover:gap-3 transition-all"
              >
                Se alle tjenester
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="lg:col-span-8 lg:col-start-5 border-t border-line">
              {services.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 60}>
                  <div className="grid grid-cols-12 gap-x-4 gap-y-2 py-7 border-b border-line group">
                    <span className="col-span-2 sm:col-span-1 font-mono text-xs text-muted pt-1.5 tabular-nums group-hover:text-ink transition-colors">{s.num}</span>
                    <h3 className="col-span-10 sm:col-span-5 text-lg lg:text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="lede col-span-10 col-start-3 sm:col-span-6 sm:col-start-7 text-muted text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About — split, image carries a hard yellow edge */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-6">
              <div className="relative border-l-4 border-accent">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getImagePath("/assets/sveising.png")}
                    alt="Sveiser fra 3TS i arbeid på rustfrie rørdeler"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6" delay={100}>
              <div>
                <h2 className="display text-4xl lg:text-5xl font-semibold mb-6">
                  Stiftet 1995.<br />Spesialister siden dag én.
                </h2>
                <p className="lede text-muted leading-relaxed mb-7 max-w-[60ch]">
                  3TS Industriservice AS startet med 4 mann i Hunndalen ved Gjøvik. Tre grunnleggere hadde navn som startet på T, én på S, derav 3TS. Siden 1997 er vi sertifiserte sveisere, og vi gjennomfører de aller fleste typer prosjekter primært innen næringsmiddel og energi.
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {tags.map(tag => (
                    <li key={tag} className="flex items-center gap-2 text-sm text-ink">
                      <span aria-hidden className="w-1.5 h-1.5 bg-accent" />
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/om-oss"
                  className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-accent pb-1 hover:gap-3 transition-all"
                >
                  Les mer om oss
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="pb-20 lg:pb-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="display text-3xl lg:text-4xl font-semibold">Kunder vi er stolte av</h2>
        </div>
        <ClientMarquee />
      </section>

      {/* CTA */}
      <section className="bg-band border-t border-white/10 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="display text-4xl lg:text-6xl font-semibold text-band-ink mb-4">Klar for å starte?</h2>
              <p className="lede text-band-muted text-lg max-w-md">Ta kontakt i dag for en uforpliktende samtale om ditt prosjekt.</p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link
                href="/kontakt"
                className="px-7 py-3.5 bg-accent text-accent-ink font-semibold hover:bg-accent-hover active:translate-y-px transition-all"
              >
                Få tilbud
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
