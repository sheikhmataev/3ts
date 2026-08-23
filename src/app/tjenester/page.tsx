import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { getImagePath } from "@/lib/images";

const flow = [
  "Befaring og behovsanalyse",
  "Layouttegninger og kostnadsestimater",
  "3D visualisering og justeringer",
  "Endelig forslag og fastpris tilbud",
];

const principles = [
  "Fokus på styring, koordinering, og leveranser innenfor tids-, kvalitets-, og kostnadsrammer",
  "Kvaliteten på leveransen defineres i henhold til formål funksjon og brukerkrav",
  "Høy grad av sikkerhet for korrekt budsjettering i forhold til leveransen",
];

const maintained = ["Ventiler", "Pumper", "Plateapparater", "Separatorer", "Andre maskiner og komponenter"];

export const metadata: Metadata = {
  title: "Tjenester",
  description: "Forprosjekt, 3D-tegning, prosjektgjennomføring og service for prosessindustrien. Totalansvar i alle ledd.",
  alternates: { canonical: "/tjenester" },
};

export default function Tjenester() {
  return (
    <div>
      <Navigation />
      <main id="innhold">

      <PageHeader
        title={<>Hva vi kan gjøre <span className="text-accent">for deg</span></>}
        lede="Fra første befaring til ferdig anlegg, totalansvar i alle ledd."
        image="/assets/sveising.png"
      />

      {/* 1 — Forprosjekt: split, text left / flow right */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="display text-3xl lg:text-5xl font-semibold mb-8">Forprosjekt og prosjektering</h2>
              <div className="space-y-5 text-muted leading-relaxed max-w-[62ch] lede">
                <p className="text-ink text-lg">
                  Dersom du planlegger nybygg, ombygging eller utvidelse av eksisterende prosessanlegg, kan en grundig foranalyse være en meget lønnsom investering. Dette kalles et forprosjekt.
                </p>
                <p>
                  Et forprosjekt gir deg mulighet til å vurdere ulike tekniske veivalg og få bedre forståelse av hva ulike løsninger vil bety for drift og økonomi. En slik foranalyse gjør også at anbudsforespørsler/-dokumentasjon blir mer presis.
                </p>
                <p className="border-l-4 border-accent pl-5 text-ink">
                  <strong className="font-semibold">Målet:</strong> å bestemme utbyggingskostnadene innenfor en usikkerhet på +/- 20%
                </p>
                <p>
                  3TS sitter på kompetansen til å utføre forprosjektering. Under forprosjekteringen gjøres det mer nøyaktige beregninger av produksjonspotensialet og utbyggingskostnader. I denne prosessen blir hele anlegget beskrevet, slik at man også får oversikt over de inngrep byggingen vil medføre.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-sm font-semibold tracking-tight mb-6">Flytskjema</h3>
              <ol className="border-t border-line">
                {flow.map((step, i) => (
                  <li key={step} className="flex gap-5 py-5 border-b border-line">
                    <span className="font-mono text-xs text-muted pt-0.5 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-ink leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — 3D Tegning: split reversed */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-6 lg:order-2">
              <div className="border-l-4 border-accent">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={getImagePath("/assets/3dtegning.png")}
                    alt="3D-modell av et prosessanlegg tegnet av 3TS"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-6 lg:order-1">
              <h2 className="display text-3xl lg:text-5xl font-semibold mb-8">3D Tegning</h2>
              <div className="space-y-5 text-muted leading-relaxed max-w-[62ch] lede">
                <p className="text-ink text-lg">
                  Der det tidligere var tilfredsstillende med todimensjonale tegninger, kreves det i dag ofte tredimensjonale modeller. Innenfor bygg kaller man ofte denne type modeller for Bygg-Informasjons-Modeller (BIM) da det ligger i betegnelsen at det er mer fokus på informasjon enn tradisjonelle tegninger.
                </p>
                <p>
                  3D tegninger er et kraftig verktøy som 3TS er stolte av å kunne tilby. Med 3D kan en montasje visualiseres og skape et grunnlag til et tilbud eller en prosjektering.
                </p>
                <p className="border-l-4 border-accent pl-5 text-ink">
                  Ved å visualisere og tegne opp hele montasjen reduserer vi risikoer knyttet til arbeidet og vi reduserer kostnadene ved å kjøre ut eksakte bestillingslister og kutte ned montasjetiden.
                </p>
                <p>
                  Vårt team av tegnere leverer ikke bare en tegning, men et detaljert produkt som kan brukes i alt fra planlegging og gjennomføring til prosjektbeskrivelse og undervisning. Vi leverer både bilder og video av eksisterende eller ikke eksisterende anlegg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Prosjektgjennomføring: full-width band, breaks the zigzag */}
      <section className="bg-band text-band-ink py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl lg:text-5xl font-semibold mb-6 max-w-2xl">Prosjektgjennomføring</h2>
          <p className="lede text-band-muted text-lg max-w-2xl leading-relaxed mb-14">
            Prosjektgjennomføring er kort sagt hvordan enkelt-prosjekter skal gjennomføres for å oppnå ønskede resultater.
          </p>

          <ol className="grid md:grid-cols-3 gap-px bg-white/10 mb-14">
            {principles.map((p, i) => (
              <li key={i} className="bg-band p-7 lg:p-8">
                <span className="font-mono text-xs text-accent tabular-nums block mb-4">{String(i + 1).padStart(2, "0")}</span>
                <p className="lede text-band-ink text-sm leading-relaxed">{p}</p>
              </li>
            ))}
          </ol>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-6 lg:col-start-4">
              <p className="lede text-band-muted leading-relaxed mb-5">
                3TS har de siste årene hatt et stort fokus på prosjektering og prosjektgjennomføring. Dette sammen med lang erfaring i bransjen har resultert i at vi kan ta på oss totalansvaret for både større og mindre prosjekt.
              </p>
              <p className="lede text-band-muted leading-relaxed">
                Med en utvidet stab av både prosjektledere, ingeniører, tegnere og montører kan vi sammen med våre samarbeidspartnere levere i alle ledd av et prosjekt.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-10 lg:row-start-1">
              <div className="relative aspect-[4/3] border-l-4 border-accent overflow-hidden">
                <Image
                  src={getImagePath("/assets/forprosjekt.png")}
                  alt="Montasje av prosessanlegg under gjennomføring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Service: two definition panels split by a hairline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl lg:text-5xl font-semibold mb-5 max-w-2xl">Service og vedlikehold</h2>
          <p className="lede text-muted text-lg max-w-2xl leading-relaxed mb-14">
            Vi kan hjelpe deg med service og vedlikehold, slik at du kan konsentrere deg om den daglige driften
          </p>

          <div className="grid lg:grid-cols-2 border-t border-line">
            <div className="py-10 lg:pr-14 border-b lg:border-b-0 lg:border-r border-line">
              <h3 className="text-xl font-semibold tracking-tight mb-4">Forebyggende vedlikehold</h3>
              <p className="lede text-muted leading-relaxed mb-6 max-w-[58ch]">
                Lange driftstider og mer komplekse anlegg stiller krav til systematisert og dokumentert vedlikehold. Vi kan tilby standardiserte og kostnadseffektive løsninger for forebyggende vedlikehold av prosessavsnitt eller utvalgte komponenter.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
                {maintained.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span aria-hidden className="w-1.5 h-1.5 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-10 lg:pl-14 border-b border-line lg:border-b-0">
              <h3 className="text-xl font-semibold tracking-tight mb-4">Økonomiske fordeler</h3>
              <p className="lede text-muted leading-relaxed max-w-[58ch]">
                Regelmessig service og vedlikehold er god økonomi både for å unngå driftsstans og for å opprettholde produktivitet, hygiene og driftsøkonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
