import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { getImagePath } from "@/lib/images";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Stiftet i 1995 med fire mann. I dag 13 ansatte på Industrigata 50 i Lillehammer, sertifiserte sveisere siden 1997.",
  alternates: { canonical: "/om-oss" },
};

const timeline = [
  { year: "1995", title: "Selskapet stiftes", desc: "4 mann starter selskapet" },
  { year: "1997", title: "Sertifisering", desc: "Blir sertifiserte sveisere" },
  { year: "2000-tallet", title: "Ekspansjon", desc: "Ledende innen næringsmiddel og energi" },
  { year: "I dag", title: "Moderne bedrift", desc: "Totalansvar for prosjekter" },
];

const teamMembers = [
  { name: "Tore Bræin", title: "Daglig leder / Eier", phone: "915 46 834", email: "tore@3ts.no", image: "/assets/tore.png" },
  { name: "Leif Tore Mauritzen", title: "Salgsingeniør", phone: "99 36 70 82", email: "leiftore@3ts.no", image: "/assets/avatar-placeholder.svg" },
  { name: "Hans Peder Sveum", title: "Montør", phone: "41 32 58 44", email: "peder@3ts.no", image: "/assets/hanspeder.png" },
];

const ksPoints = [
  "Dokumentasjon, alle prosesser og prosedyrer",
  "Styring, klare ansvarsområder og fullmakter",
  "Kommunikasjon, strategi, mål og handlingsplaner",
  "Kompetanse, informasjon og opplæring",
  "Kvalitetsforbedringer, verifisere og korrigere",
];

export default function OmOss() {
  return (
    <div>
      <Navigation />
      <main id="innhold">

      <PageHeader
        title={<>Historien bak <span className="text-accent">3TS</span></>}
        lede="Stiftet i 1995 med fire mann. I dag en fullverdig leverandør av prosessanlegg."
        image="/assets/sveising.png"
      />

      {/* History — teksten kommer i to pust, tidslinja ett steg om gangen */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="display text-3xl lg:text-5xl font-semibold mb-8">Fra 4 mann til industriell ledelse</h2>
              </ScrollReveal>

              <div className="max-w-[62ch] lede">
                <ScrollReveal delay={80}>
                  <p className="text-ink text-lg leading-relaxed mb-5">
                    3TS Industriservice AS ble stiftet i 1995 av 4 sertifiserte sveisere. I dag holder vi til på Industrigata 50 i Lillehammer med 13 ansatte. Med over 25 års erfaring har vi bygget et solid omdømme som en pålitelig leverandør av komplette løsninger for prosessanlegg.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={160}>
                  <p className="text-muted leading-relaxed">
                    Vår kontinuerlige fokus på kvalitet, sikkerhet og kundetilfredshet har gjort oss til en foretrukket partner innen næringsmiddel og energi. Vi brenner for fagets fremtid. Vi har fast inne utplasseringselever fra Vargstad videregående skole (inkludert engasjerte elever som Jonas og Abdulghani) som står på og lærer av de beste tre dager i uka!
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-sm font-semibold tracking-tight mb-6">Vår reise</h3>
              <ol className="border-t border-line">
                {timeline.map((item, i) => (
                  <ScrollReveal key={item.year} delay={i * 90}>
                    <li className="grid grid-cols-[6.5rem_1fr] gap-4 py-5 border-b border-line">
                      <span className="font-mono text-xs text-muted pt-1 tabular-nums">{item.year}</span>
                      <div>
                        <h4 className="font-semibold tracking-tight mb-1">{item.title}</h4>
                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="display text-3xl lg:text-5xl font-semibold mb-3">Vårt Team</h2>
            <p className="lede text-muted mb-12 max-w-lg">Erfarne fagfolk klar til å hjelpe deg med ditt prosjekt</p>
          </ScrollReveal>

          <div className="border-t-2 border-ink">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.email} delay={i * 90}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center py-7 border-b border-line">
                  <div className="md:col-span-1">
                    <div className="relative w-16 h-16 overflow-hidden bg-surface border border-line">
                      <Image src={getImagePath(member.image)} alt="" fill className="object-cover" />
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-lg font-semibold tracking-tight">{member.name}</h3>
                    <p className="text-sm text-muted">{member.title}</p>
                  </div>

                  <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-baseline sm:justify-end gap-1 sm:gap-8 text-sm">
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="font-mono text-ink hover:text-accent transition-colors w-fit">
                      {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} className="text-muted hover:text-ink transition-colors w-fit">
                      {member.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HMS + KS — to kort som kommer inn hver for seg */}
      <section className="py-20 lg:py-28 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="display text-3xl lg:text-5xl font-semibold mb-4">HMS &amp; Kvalitetssikring</h2>
            <p className="lede text-muted text-lg max-w-xl leading-relaxed mb-14">
              Vi tar helse, miljø, sikkerhet og kvalitet på alvor i alt vi gjør
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <article className="h-full bg-surface border border-line hover:border-line-strong transition-colors p-8 lg:p-10">
                <span className="block w-8 h-1 bg-accent mb-6" />
                <h3 className="text-xl font-semibold tracking-tight mb-4">HMS</h3>
                <p className="lede text-muted leading-relaxed mb-4">
                  Som arbeidsgiver kartlegger vi arbeidsmiljøet grundig og vurderer tiltak for å forebygge skader og sykdom. Dette gir oss et godt grunnlag for å skape et trygt og helsefremmende arbeidsmiljø.
                </p>
                <p className="lede text-ink leading-relaxed">
                  Sikkerhet for våre ansatte og kunder er vår høyeste prioritet.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <article className="h-full bg-surface border border-line hover:border-line-strong transition-colors p-8 lg:p-10">
                <span className="block w-8 h-1 bg-accent mb-6" />
                <h3 className="text-xl font-semibold tracking-tight mb-4">Kvalitetssikringssystem</h3>
                <p className="lede text-muted leading-relaxed mb-6">
                  Vårt KS-system sikrer consistent høy kvalitet i alle prosjekter gjennom:
                </p>
                <ul>
                  {ksPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-2 text-sm">
                      <span aria-hidden className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-5">
              <h2 className="display text-3xl lg:text-4xl font-semibold mb-5">Besøksadresse</h2>
              <p className="lede text-muted leading-relaxed mb-8 max-w-md">
                Vi holder til i moderne lokaler på Lillehammer, sentralt plassert for å betjene kunder over hele landet.
              </p>

              <address className="not-italic border-l-4 border-accent pl-6 mb-8">
                <p className="font-semibold tracking-tight mb-1">3TS Industriservice AS</p>
                <p className="text-muted">Industrigata 50</p>
                <p className="text-muted">2619 Lillehammer</p>
              </address>

              <a
                href="https://maps.google.com/?q=Industrigata+50+2619+Lillehammer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-accent pb-1 hover:gap-3 transition-all"
              >
                Åpne i Google Maps
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
              </a>
            </ScrollReveal>

            <div className="lg:col-span-7">
              <div className="h-80 lg:h-[26rem] border border-line overflow-hidden">
                <iframe
                  title="Kart over Industrigata 50, Lillehammer"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.3970593525296!2d10.436558678095112!3d61.131514975536724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466a886bccd30b5b%3A0x9e559b4f4bbf267!2sIndustrigata%2050%2C%202619%20Lillehammer!5e1!3m2!1sen!2sno!4v1775175148129!5m2!1sen!2sno"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
