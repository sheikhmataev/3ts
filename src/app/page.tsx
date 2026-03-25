'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="/" />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/30 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <p className="text-yellow-300 text-xl font-semibold tracking-wide uppercase">
                  Sertifiserte siden 1997
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  3TS Sveising
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-300 font-light">
                  Kanskje verdens beste sveisere
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                  Sertifiserte, norske sveisere spesialisert på prosessmontasje for næringsmiddelindustrien. Over 25 års erfaring med kvalitetsarbeid.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/tjenester" className="group bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/50">
                    <span className="flex items-center">
                      Våre Tjenester
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/kontakt" className="group bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl border border-white/30">
                    <span className="flex items-center">
                      Kontakt Oss
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">25+</div>
                  <div className="text-sm text-white/80">Års erfaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-white/80">Sertifisert</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">16+</div>
                  <div className="text-sm text-white/80">Store kunder</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
                <Image
                  src="/bilde_med_bil.png"
                  alt="3TS Industriell sveising"
                  width={800}
                  height={500}
                  className="rounded-xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-bold shadow-lg">
                  Prosessmontasje
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Main Content - What We Offer */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hva kan vi tilby?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vi leverer komplette løsninger for prosessindustrien med fokus på kvalitet og sikkerhet
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    "Sveise og montere prosessutstyr, materialer og komponenter til næringsmiddelindustrien",
                    "Levere ulike typer tanker og beholdere til alle mulige applikasjoner",
                    "Leverer ventiler og pumper fra alle leverandører",
                    "Levere total entrepriser og vil være den eneste du trenger å forholde deg til i ett prosjekt",
                    "Vi har stort nettverk på brukt utstyr"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group hover:translate-x-2 transition-all duration-300">
                      <div className="bg-red-100 group-hover:bg-red-200 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-colors">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/tjenester" className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Les mer om våre tjenester
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={400}>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-12 rounded-3xl shadow-xl border border-red-100">
                  <div className="text-center mb-8">
                    <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Kvalitet i alle ledd</h3>
                    <p className="text-gray-600 mb-6">
                      3TS Industriservice AS leverer komplette løsninger for prosessindustrien. Vi er spesialiserte på næringsmiddelindustrien og har over 25 års erfaring med sertifiserte, norske sveisere.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Sertifisert kvalitet</h4>
                          <p className="text-sm text-gray-600">Sertifiserte sveisere siden 1997</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Effektiv prosjektgjennomføring</h4>
                          <p className="text-sm text-gray-600">Fra planlegging til igangkjøring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Utforsk våre tjenester
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fra prosjektering til ferdigstillelse - vi er din totale leverandør
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={200}>
              <Link href="/tjenester" className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-red-600 group-hover:bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  Tjenester
                </h3>
                <p className="text-gray-600 mb-4">
                  Forprosjekt, 3D-tegning, prosjektgjennomføring og service
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  Se alle tjenester
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Link href="/produkter" className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 hover:border-yellow-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-yellow-400 group-hover:bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                  Produkter
                </h3>
                <p className="text-gray-600 mb-4">
                  Rustfrie væsketralle, bålpanner og industriutstyr
                </p>
                <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700">
                  Se alle produkter
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={600}>
              <Link href="/kontakt" className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gray-700 group-hover:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  Kontakt oss
                </h3>
                <p className="text-gray-600 mb-4">
                  Møt vårt team og ta kontakt for en uforpliktende samtale
                </p>
                <div className="flex items-center text-gray-600 font-semibold group-hover:text-gray-700">
                  Ta kontakt
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="3TS Logo"
                width={150}
                height={50}
                className="h-12 w-auto mx-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="mb-4 text-lg font-semibold">© 2025: 3TS Industriservice AS</p>
            <p className="text-red-200 mb-6 max-w-2xl mx-auto">
              Trenger du hjelp med energisparing eller prosess prosjekter ikke vær redd for å ta kontakt!
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/kontakt" className="inline-flex items-center bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Kontakt oss
              </Link>
              <Link href="/tjenester" className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Våre tjenester
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
