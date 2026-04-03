'use client';

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function OmOss() {
  const customers = [
    "Tine", "Q-meieriene", "Ringnes", "Coca Cola", "Røra fabrikker", 
    "Synnøve Finden", "Spirax", "Borg bryggeri", "Atna bryggeri", 
    "Lillehammer Ysteri", "Nortura", "Aass bryggeri", "Maarud", 
    "GEA", "Alfa Laval", "Thomas Thiis"
  ];

  return (
    <div className="bg-white">
      <Navigation />

      <section className="relative pt-16 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Om oss</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">
            Historien bak <span className="text-red-500">3TS</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Stiftet i 1995 med fire mann. I dag en fullverdig leverandør av prosessanlegg.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Historie</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">Fra 4 mann til industriell ledelse</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Siden 1995 har vi vokst fra et lite sveiseverksted til en fullverdig leverandør av prosessanlegg.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  3TS Industriservice AS ble stiftet i 1995 av 4 sertifiserte sveisere. I dag holder vi til på Industrigata 50 i Lillehammer med 13 ansatte. Med over 25 års erfaring har vi bygget et solid omdømme som en pålitelig leverandør av komplette løsninger for prosessanlegg.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Vår kontinuerlige fokus på kvalitet, sikkerhet og kundetilfredshet har gjort oss til en foretrukket partner innen næringsmiddel og energi. Vi brenner for fagets fremtid – vi har fast inne utplasseringselever fra Vargstad videregående skole (inkludert engasjerte elever som Jonas og Abdulghani) som står på og lærer av de beste tre dager i uka!
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-slate-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Vår reise</h3>
                <div className="space-y-6">
                  {[
                    { year: "1995", title: "Selskapet stiftes", desc: "4 mann starter selskapet" },
                    { year: "1997", title: "Sertifisering", desc: "Blir sertifiserte sveisere" },
                    { year: "2000-tallet", title: "Ekspansjon", desc: "Ledende innen næringsmiddel og energi" },
                    { year: "I dag", title: "Moderne bedrift", desc: "Totalansvar for prosjekter" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-red-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-black flex-shrink-0">
                        {item.year.slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Prosess</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">Slik jobber vi</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Vår arbeidsmetodikk sikrer kvalitet og effektivitet i alle prosjekter
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Befaring",
                desc: "Vi kommer på befaring og bidrar med løsningsforslag på prosjekter av ulik størrelse."
              },
              {
                step: "02", 
                title: "Forslag og estimater",
                desc: "Vi utarbeider forslag med layouttegninger samt kostnadsestimater eller fastpris tilbud."
              },
              {
                step: "03",
                title: "3D visualisering",
                desc: "Ved godkjent forslag tegner vi prosjektet i 3D, slik at du kan se forslaget før oppstart."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-red-600 text-white w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Kunder</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">Ledende selskaper stoler på oss</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Vi er stolte av å samarbeide med de største navnene innen næringsmiddelindustrien
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-slate-50 rounded-3xl p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {customers.map((customer, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-red-50 transition-colors cursor-pointer group">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-700 font-medium group-hover:text-red-600 transition-colors">{customer}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Fornøyde kunder siden 1995</h3>
                <p className="text-yellow-700">
                  GEA, Alfa Laval, Thomas Thiis — og mange fler gjennom 25+ år i bransjen.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HMS/KS Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Sikkerhet</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">HMS & Kvalitetssikring</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Vi tar helse, miljø, sikkerhet og kvalitet på alvor i alt vi gjør
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">HMS</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Som arbeidsgiver kartlegger vi arbeidsmiljøet grundig og vurderer tiltak for å forebygge skader og sykdom. Dette gir oss et godt grunnlag for å skape et trygt og helsefremmende arbeidsmiljø.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Sikkerhet for våre ansatte og kunder er vår høyeste prioritet.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Kvalitetssikringssystem</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Vårt KS-system sikrer consistent høy kvalitet i alle prosjekter gjennom:
                </p>
                <ul className="space-y-3 text-slate-600">
                  {[
                    "Dokumentasjon – alle prosesser og prosedyrer",
                    "Styring – klare ansvarsområder og fullmakter",
                    "Kommunikasjon – strategi, mål og handlingsplaner",
                    "Kompetanse – informasjon og opplæring",
                    "Kvalitetsforbedringer – verifisere og korrigere"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-white mb-4">Vil du samarbeide med oss?</h2>
            <p className="text-red-100 text-xl mb-10">Ta kontakt for en uforpliktende samtale om ditt prosjekt.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt" className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-slate-100 transition-all text-lg">Kontakt oss</Link>
              <Link href="/tjenester" className="px-8 py-4 bg-red-700 border border-red-500 text-white font-bold rounded-xl hover:bg-red-800 transition-all text-lg">Våre tjenester</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
