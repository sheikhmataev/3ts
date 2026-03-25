'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

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

const clients = [
  "Tine","Q-meieriene","Ringnes","Coca Cola","Røra fabrikker",
  "Synnøve Finden","Spirax","Borg bryggeri","Atna bryggeri",
  "Lillehammer Ysteri","Nortura","Aass bryggeri","Maarud",
  "GEA","Alfa Laval","Thomas Thiis",
];

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24">
        <div className="absolute inset-0">
          <Image src="/bilde_med_bil.png" alt="3TS Industriservice" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">3TS Industriservice AS · Gjøvik</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Sveising og<br /><span className="text-red-500">prosessanlegg</span><br />av høyeste klasse
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Sertifiserte norske sveisere med over 25 års erfaring. Vi tar totalansvar — fra forprosjekt og 3D-tegning til igangkjøring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all text-lg shadow-lg shadow-red-900/40">Kontakt oss</Link>
              <Link href="/tjenester" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg">Se tjenester</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-1">{s.value}</div>
                <div className="text-red-200 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Våre tjenester</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Hva vi tilbyr</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">Komplette løsninger for prosessindustrien — ett selskap, totalansvar.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-10 h-10 rounded-xl bg-red-600 mb-6 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{s.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tjenester" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all">
              Se alle tjenester
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image src="/sveising.png" alt="Sveising" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                  <p className="text-white font-semibold text-sm">Sertifisert siden 1997</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <div>
                <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Om 3TS</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">Stiftet 1995.<br />Spesialister siden dag én.</h2>
                <p className="text-slate-600 leading-relaxed mb-6">3TS Industriservice AS startet med 4 mann i Hunndalen ved Gjøvik. Tre grunnleggere hadde navn som startet på T, én på S — derav 3TS. Siden 1997 er vi sertifiserte sveisere, spesialisert på næringsmiddelindustrien.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Næringsmiddelindustri","Rustfritt stål","3D-prosjektering","Totalentreprise"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">{tag}</span>
                  ))}
                </div>
                <Link href="/om-oss" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all">
                  Les mer om oss <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Referanser</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">Kunder vi er stolte av</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {clients.map((c, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center hover:border-red-600/50 hover:bg-slate-700 transition-all">
                  <span className="text-slate-300 text-sm font-medium">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Klar for å starte?</h2>
            <p className="text-red-100 text-xl mb-10">Ta kontakt i dag for en uforpliktende samtale om ditt prosjekt.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt" className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-slate-100 transition-all text-lg">Kontakt oss</Link>
              <a href="tel:99504311" className="px-8 py-4 bg-red-700 border border-red-500 text-white font-bold rounded-xl hover:bg-red-800 transition-all text-lg">Ring: 99 50 43 11</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
