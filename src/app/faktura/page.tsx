'use client';

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Faktura() {
  return (
    <div className="bg-white">
      <Navigation />

      <section className="relative pt-16 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Faktura</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">Fakturaforsendelse</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Informasjon om hvordan du sender faktura til 3TS Industriservice AS.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3TS Industriservice AS
              </h2>
              <p className="text-lg text-gray-600">
                Organisasjonsnummer: 975 339 793
              </p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
              <p className="text-sm text-red-800">
                <strong>Viktig:</strong> For fremtiden ber vi om å få tilsendt alle fakturaer fra dere på en av følgende måter. Vær også oppmerksom på krav til merking og fakturakvalitet.
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600">
                <strong>Dato:</strong> Lillehammer den 29.03.2019
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invoice Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Fakturaforsendelse
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* EHF */}
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-red-200">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">1. Elektronisk faktura (EHF)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ønsker primært å motta faktura via EHF. 3TS Industriservice AS er meldt inn i ELMA og kan således motta EHF via vårt aksesspunkt Xledger.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800 mb-2">
                  <strong>Mer informasjon om EHF:</strong>
                </p>
                <a 
                  href="http://anskaffelser.no/e-handel/faktura/slik-kommer-du-i-gang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline text-sm"
                >
                  anskaffelser.no/e-handel/faktura/slik-kommer-du-i-gang
                </a>
              </div>
            </div>

            {/* E-post */}
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-yellow-200">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">2. Fakturaforsendelse via e-post</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fakturaer som sendes via e-post kan sendes til:
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <a 
                  href="mailto:post@viewledger.com" 
                  className="text-red-600 hover:text-red-700 font-semibold text-lg"
                >
                  post@viewledger.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Krav til fakturaer
          </h2>

          <div className="space-y-8">
            {/* Merking */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">2. Merking av fakturaer</h3>
              </div>
              <p className="text-gray-600">
                Alle fakturaer skal være merket med bestillers navn og/eller avdeling og prosjektreferanse.
              </p>
            </div>

            {/* Kvalitet */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">3. Fakturakvalitet</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fakturaene skal skannes og leses optisk, noe som medfører at fakturaene fortrinnsvis bør være skrevet ut i sort/hvitt format.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-sm text-red-800">
                  <strong>Viktig:</strong> Unngå stifter og binders. Håndskrevne fakturaer og fakturaer uten organisasjonsnummer vil bli avvist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">
              Spørsmål om faktura?
            </h2>
            <p className="mb-6">
              Spørsmål til ovennevnte kan rettes til regnskapsfører Nini Mærsk-Møller eller undertegnede.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Regnskapsfører</h3>
                <p className="mb-1">Nini Mærsk-Møller</p>
                <a href="tel:47466120" className="hover:underline">Tlf: 474 66 120</a>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Kontakt</h3>
                <p className="mb-1">Tore Bræin</p>
                <a href="tel:99504311" className="hover:underline">Tlf: 99 50 43 11</a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm opacity-80">
                Vennlig hilsen<br />
                3TS Industriservice AS
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
