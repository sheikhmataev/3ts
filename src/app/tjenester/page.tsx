'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Tjenester() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="/tjenester" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Våre Tjenester
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Vi leverer komplette løsninger for prosessindustrien med fokus på kvalitet og sikkerhet
            </p>
          </div>
        </div>
      </section>

      {/* Forprosjekt Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Forprosjekt og prosjektering
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dersom du planlegger nybygg, ombygging eller utvidelse av eksisterende prosessanlegg, kan en grundig foranalyse være en meget lønnsom investering. Dette kalles et forprosjekt.
              </p>
              <p className="text-gray-600 mb-6">
                Et forprosjekt gir deg mulighet til å vurdere ulike tekniske veivalg og få bedre forståelse av hva ulike løsninger vil bety for drift og økonomi. En slik foranalyse gjør også at anbudsforespørsler/-dokumentasjon blir mer presis.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Målet:</strong> å bestemme utbyggingskostnadene innenfor en usikkerhet på +/- 20%
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                3TS sitter på kompetansen til å utføre forprosjektering. Under forprosjekteringen gjøres det mer nøyaktige beregninger av produksjonspotensialet og utbyggingskostnader. I denne prosessen blir hele anlegget beskrevet, slik at man også får oversikt over de inngrep byggingen vil medføre.
              </p>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flytskjema</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">1</div>
                    <p className="ml-4 text-gray-600">Befaring og behovsanalyse</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">2</div>
                    <p className="ml-4 text-gray-600">Layouttegninger og kostnadsestimater</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">3</div>
                    <p className="ml-4 text-gray-600">3D visualisering og justeringer</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">4</div>
                    <p className="ml-4 text-gray-600">Endelig forslag og fastpris tilbud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Tegning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                3D Tegning
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Der det tidligere var tilfredsstillende med todimensjonale tegninger, kreves det i dag ofte tredimensjonale modeller. Innenfor bygg kaller man ofte denne type modeller for Bygg-Informasjons-Modeller (BIM) da det ligger i betegnelsen at det er mer fokus på informasjon enn tradisjonelle tegninger.
              </p>
              <p className="text-gray-600 mb-6">
                3D tegninger er et kraftig verktøy som 3TS er stolte av å kunne tilby. Med 3D kan en montasje visualiseres og skape et grunnlag til et tilbud eller en prosjektering.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  Ved å visualisere og tegne opp hele montasjen reduserer vi risikoer knyttet til arbeidet og vi reduserer kostnadene ved å kjøre ut eksakte bestillingslister og kutte ned montasjetiden.
                </p>
              </div>
              <p className="text-gray-600">
                Vårt team av tegnere leverer ikke bare en tegning, men et detaljert produkt som kan brukes i alt fra planlegging og gjennomføring til prosjektbeskrivelse og undervisning. Vi leverer både bilder og video av eksisterende eller ikke eksisterende anlegg.
              </p>
            </div>
            <div>
              <Image
                src="/3dtegning.png"
                alt="3D Tegning eksempel"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prosjektgjennomføring Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/forprosjekt.png"
                alt="Prosjektgjennomføring"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prosjektgjennomføring
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Prosjektgjennomføring er kort sagt hvordan enkelt-prosjekter skal gjennomføres for å oppnå ønskede resultater.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600">Fokus på styring, koordinering, og leveranser innenfor tids-, kvalitets-, og kostnadsrammer</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600">Kvaliteten på leveransen defineres i henhold til formål funksjon og brukerkrav</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600">Høy grad av sikkerhet for korrekt budsjettering i forhold til leveransen</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                3TS har de siste årene hatt et stort fokus på prosjektering og prosjektgjennomføring. Dette sammen med lang erfaring i bransjen har resultert i at vi kan ta på oss totalansvaret for både større og mindre prosjekt.
              </p>
              <p className="text-gray-600">
                Med en utvidet stab av både prosjektledere, ingeniører, tegnere og montører kan vi sammen med våre samarbeidspartnere levere i alle ledd av et prosjekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service og vedlikehold Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service og vedlikehold
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vi kan hjelpe deg med service og vedlikehold – slik at du kan konsentrere deg om den daglige driften
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Forebyggende vedlikehold</h3>
              <p className="text-gray-600 mb-4">
                Lange driftstider og mer komplekse anlegg stiller krav til systematisert og dokumentert vedlikehold. Vi kan tilby standardiserte og kostnadseffektive løsninger for forebyggende vedlikehold av prosessavsnitt eller utvalgte komponenter.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Ventiler</li>
                <li>• Pumper</li>
                <li>• Plateapparater</li>
                <li>• Separatorer</li>
                <li>• Andre maskiner og komponenter</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Økonomiske fordeler</h3>
              <p className="text-gray-600 mb-4">
                Regelmessig service og vedlikehold er god økonomi både for å unngå driftsstans og for å opprettholde produktivitet, hygiene og driftsøkonomi.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800">
                  Vi kan tilby standardiserte og kostnadseffektive løsninger for service og vedlikehold av prosessanlegg eller utvalgte komponenter i deres bedrift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Trenger du hjelp med prosjektet ditt?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ved ønske kommer vi på befaring, her bidrar vi med løsningsforslag på prosjekter av ulik størrelse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontakt oss for befaring
            </Link>
            <Link href="/produkter" className="inline-flex items-center bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Se våre produkter
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
