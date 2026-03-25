'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Faktura() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="/faktura" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fakturainformasjon
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Informasjon om fakturaadresse og krav for levering av fakturaer til 3TS Industriservice AS
            </p>
          </div>
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

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Andre tjenester
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Utforsk mer av hva 3TS Industriservice AS kan tilby
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tjenester" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tjenester</h3>
              <p className="text-gray-600 text-sm">Våre tjenester og løsninger</p>
            </Link>

            <Link href="/produkter" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Produkter</h3>
              <p className="text-gray-600 text-sm">Kvalitetsprodukter for industri</p>
            </Link>

            <Link href="/kontakt" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kontakt</h3>
              <p className="text-gray-600 text-sm">Ta kontakt med oss</p>
            </Link>
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
              Trenger du hjelp med energisparing eller prosess prosjekter ikke vær red for å ta kontakt!
            </p>
            <div className="flex justify-center gap-6">
              <a href="tel:99504311" className="inline-flex items-center bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
                Ring oss
              </a>
              <Link href="/" className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Tilbake til hjem
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
