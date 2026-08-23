import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Faktura",
  description: "Slik sender du faktura til 3TS Industriservice AS: EHF via ELMA, eller e-post. Krav til merking og fakturakvalitet.",
  alternates: { canonical: "/faktura" },
};

export default function Faktura() {
  return (
    <div>
      <Navigation />
      <main id="innhold">

      <PageHeader
        title="Fakturaforsendelse"
        lede="Informasjon om hvordan du sender faktura til 3TS Industriservice AS."
      />

      {/* Company record */}
      <section className="py-16 lg:py-20 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display text-3xl lg:text-4xl font-semibold mb-6">3TS Industriservice AS</h2>
              <dl className="text-sm border-t border-line max-w-sm">
                <div className="flex justify-between gap-4 py-3 border-b border-line">
                  <dt className="text-muted">Organisasjonsnummer</dt>
                  <dd className="font-mono">975 339 793</dd>
                </div>
                <div className="flex justify-between gap-4 py-3 border-b border-line">
                  <dt className="text-muted">Dato</dt>
                  <dd className="font-mono">Lillehammer 29.03.2019</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <p className="lede border-l-4 border-accent pl-6 text-ink leading-relaxed text-lg">
                <strong className="font-semibold">Viktig:</strong> For fremtiden ber vi om å få tilsendt alle fakturaer fra dere på en av følgende måter. Vær også oppmerksom på krav til merking og fakturakvalitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two channels */}
      <section className="py-16 lg:py-24 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl lg:text-5xl font-semibold mb-12">Fakturaforsendelse</h2>

          <div className="grid lg:grid-cols-2 border-t-2 border-ink">
            <div className="py-10 lg:pr-14 border-b lg:border-b-0 lg:border-r border-line">
              <span className="font-mono text-xs text-muted tabular-nums block mb-4">01</span>
              <h3 className="text-xl font-semibold tracking-tight mb-4">Elektronisk faktura (EHF)</h3>
              <p className="lede text-muted leading-relaxed mb-6 max-w-[58ch]">
                Ønsker primært å motta faktura via EHF. 3TS Industriservice AS er meldt inn i ELMA og kan således motta EHF via vårt aksesspunkt Xledger.
              </p>
              <p className="text-sm text-muted mb-2">Mer informasjon om EHF:</p>
              <a
                href="http://anskaffelser.no/e-handel/faktura/slik-kommer-du-i-gang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border-b-2 border-accent pb-0.5 hover:text-muted transition-colors break-all"
              >
                anskaffelser.no/e-handel/faktura/slik-kommer-du-i-gang
              </a>
            </div>

            <div className="py-10 lg:pl-14 border-b border-line lg:border-b-0">
              <span className="font-mono text-xs text-muted tabular-nums block mb-4">02</span>
              <h3 className="text-xl font-semibold tracking-tight mb-4">Fakturaforsendelse via e-post</h3>
              <p className="lede text-muted leading-relaxed mb-6 max-w-[58ch]">
                Fakturaer som sendes via e-post kan sendes til:
              </p>
              <a
                href="mailto:post@viewledger.com"
                className="inline-block font-mono text-lg lg:text-xl border-b-2 border-accent pb-1 hover:text-muted transition-colors break-all"
              >
                post@viewledger.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements — dark band, register layout */}
      <section className="bg-band text-band-ink py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl lg:text-5xl font-semibold mb-12">Krav til fakturaer</h2>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-accent tabular-nums block mb-4">02</span>
              <h3 className="text-xl font-semibold tracking-tight mb-4">Merking av fakturaer</h3>
              <p className="lede text-band-muted leading-relaxed">
                Alle fakturaer skal være merket med bestillers navn og/eller avdeling og prosjektreferanse.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <span className="font-mono text-xs text-accent tabular-nums block mb-4">03</span>
              <h3 className="text-xl font-semibold tracking-tight mb-4">Fakturakvalitet</h3>
              <p className="lede text-band-muted leading-relaxed mb-6">
                Fakturaene skal skannes og leses optisk, noe som medfører at fakturaene fortrinnsvis bør være skrevet ut i sort/hvitt format.
              </p>
              <p className="lede border-l-4 border-accent pl-5 text-band-ink leading-relaxed">
                <strong className="font-semibold">Viktig:</strong> Unngå stifter og binders. Håndskrevne fakturaer og fakturaer uten organisasjonsnummer vil bli avvist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display text-3xl lg:text-4xl font-semibold mb-5">Spørsmål om faktura?</h2>
              <p className="lede text-muted leading-relaxed max-w-sm mb-8">
                Spørsmål til ovennevnte kan rettes til regnskapsfører Nini Mærsk-Møller eller undertegnede.
              </p>
              <p className="text-sm text-muted">
                Vennlig hilsen<br />
                <span className="text-ink">3TS Industriservice AS</span>
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <dl className="border-t-2 border-ink">
                <div className="grid sm:grid-cols-3 gap-2 py-5 border-b border-line">
                  <dt className="text-sm text-muted">Regnskapsfører</dt>
                  <dd className="sm:col-span-2 flex flex-wrap items-baseline gap-x-4">
                    <span className="font-semibold tracking-tight">Nini Mærsk-Møller</span>
                    <a href="tel:47466120" className="font-mono text-sm border-b border-accent pb-px hover:text-muted transition-colors">474 66 120</a>
                  </dd>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 py-5 border-b border-line">
                  <dt className="text-sm text-muted">Kontakt</dt>
                  <dd className="sm:col-span-2 flex flex-wrap items-baseline gap-x-4">
                    <span className="font-semibold tracking-tight">Tore Bræin</span>
                    <a href="tel:99504311" className="font-mono text-sm border-b border-accent pb-px hover:text-muted transition-colors">99 50 43 11</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
