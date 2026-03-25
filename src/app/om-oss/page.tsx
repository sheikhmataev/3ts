'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function OmOss() {
  const customers = [
    "Tine", "Q-meieriene", "Ringnes", "Coca Cola", "Røra fabrikker", 
    "Synnøve Finden", "Spirax", "Borg bryggeri", "Atna bryggeri", 
    "Lillehammer Ysteri", "Nortura", "Aass bryggeri", "Maarud", 
    "GEA", "Alfa Laval", "Thomas Thiis"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="/om-oss" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Om 3TS Industriservice AS
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Sertifiserte, norske sveisere med over 25 års erfaring i bransjen
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vår Historie
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                3TS Industriservice AS ble stiftet 06.06.1995 på Gjøvik. Det startet spenstig i 1995 med 4 mann og verksted i Hunndalen ved Gjøvik. Av disse fire hadde 3 mann navn som begynte på T og en mann på S derav navnet 3TS.
              </p>
              <p className="text-gray-600 mb-6">
                Selskapet ønsket å drive med sveis og da spesielt innen næringsmiddelindustrien, men i tillegg ble det stålbygg, gass og energi. De ble sertifiserte sveisere i 1997.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-sm font-semibold text-red-800 mb-2">Sertifiserte siden 1997</p>
                <p className="text-sm text-red-700">Vi har levert kvalitetsarbeid til industri og næringsmiddelindustrien i over 25 år.</p>
              </div>
              <p className="text-gray-600">
                Gjennom årene har vi utviklet oss til å bli en ledende aktør innen prosessindustrien, med et sterkt fokus på kvalitet, sikkerhet og kundetilfredshet.
              </p>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Milepæler</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">1995</div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Selskapet stiftes</p>
                      <p className="text-gray-600">4 mann starter i Hunndalen, Gjøvik</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">1997</div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Sertifisering</p>
                      <p className="text-gray-600">Blir sertifiserte sveisere</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">2000-tallet</div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Ekspansjon</p>
                      <p className="text-gray-600">Vokser til å bli ledende i næringsmiddelindustrien</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">I dag</div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Moderne bedrift</p>
                      <p className="text-gray-600">Fullverdig leverandør med totalansvar for prosjekter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hvordan jobber vi?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Vår arbeidsmetodikk sikrer kvalitet og effektivitet i alle prosjekter
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Befaring</h3>
                <p className="text-gray-600">Ved ønske kommer vi på befaring, her bidrar vi med løsningsforslag på prosjekter av ulik størrelse.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Forslag og estimater</h3>
                <p className="text-gray-600">Vi utarbeider forslag med layouttegninger samt kostnadsestimater eller fastpris tilbud.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. 3D visualisering</h3>
                <p className="text-gray-600">Ved godkjent forslag har vi et ønske om å tegne prosjektet i 3D, slik at du som kunde kan se på forslaget før oppstart og evt. komme med justeringer/endringer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våre Kunder
            </h2>
            <p className="text-lg text-gray-600">
              Vi er stolte av å samarbeide med ledende bedrifter innen næringsmiddelindustrien
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {customers.map((customer, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                  <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 hover:text-red-600 transition-colors">{customer}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Referanser</h3>
              <p className="text-sm text-yellow-700">
                GEA, Alfa Laval, Thomas Thiis - og mange flere fornøyde kunder gjennom 25+ år i bransjen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMS/KS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              HMS / KS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">HMS - Helse, Miljø og Sikkerhet</h3>
                <p className="text-gray-600 mb-4">
                  Som arbeidsgiver må vi kartlegge arbeidsmiljøet og ta en grundig gjennomgang av hva som kan være skadelig eller føre til sykdom på arbeidsplassen. Vi må vurdere om det er tatt tilstrekkelige forholdsregler, eller om mer må gjøres for å forebygge.
                </p>
                <p className="text-gray-600">
                  I 3TS jobber vi med en sikker jobb analyse. Dette dokumentet gås gjennom med kunden og vi ser på eventuelle risikoer knyttet til prosjektet. Dette dokumentet vil så signeres av begge parter som en bekreftelse på at HMS er tatt høyde for.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">KS - Kvalitetssikringssystem</h3>
                <p className="text-gray-600 mb-4">
                  3TS har en klar målsetting for kvalitetssikringsarbeidet: – Gjennom KS-systemet skal vi sikre god kvalitet ved å fokusere på:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Kundetilfredshet</strong> – sørge for at kundens kvalitetskrav og forventninger blir innfridd</li>
                  <li>• <strong>Myndighetskrav</strong> – forholde oss til aktuelle lover og forskrifter</li>
                  <li>• <strong>Kjerneprosesser</strong> – sikre god utførelse i alle ledd</li>
                  <li>• <strong>Kommunikasjon</strong> – formidle strategi, mål og handlingsplaner</li>
                  <li>• <strong>Kompetanse</strong> – gi tilstrekkelig informasjon og opplæring</li>
                  <li>• <strong>Kvalitetsforbedringer</strong> – verifisere og korrigere</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Klar for å starte ditt prosjekt?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Med vår erfaring og kompetanse sikrer vi at ditt prosjekt blir utført med høyeste kvalitet og innenfor avtalt tid og budsjett.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontakt oss i dag
            </Link>
            <Link href="/tjenester" className="inline-flex items-center bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Se våre tjenester
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
              Trenger du hjelp med energisparing eller prosess prosjekter ikke vær redd for å ta kontakt!
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/kontakt" className="inline-flex items-center bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
                Kontakt oss
              </Link>
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
