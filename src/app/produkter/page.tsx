import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { getImagePath } from "@/lib/images";

const products = [
  { id: 1, name: "Rustfri væsketralle stående", size: "250l.", material: "Rustfritt (304L)", details: "51mm kuleventil på utslipp", price: "10 000,- + mva.", image: "/assets/tralle_staende.png" },
  { id: 2, name: "Rustfri væsketralle liggende", size: "300l.", material: "Rustfritt (304L)", details: "51mm kuleventil på utslipp", price: "18 000,- + mva.", image: "/assets/tralle_liggende.png" },
  { id: 3, name: "Bålpanne i rustfritt stål", size: "Ø50cm x 54.3cm", material: "Rustfritt (304L)", details: "", price: "1 500,- + mva.", image: "/assets/sveising.png" },
  { id: 4, name: "Bålpanne i rustfritt stål", size: "Ø50cm x 27cm", material: "Rustfritt (304L)", details: "", price: "1 500,- + mva.", image: "/assets/sveising.png" },
  { id: 5, name: "Utepeis i rustfritt stål", size: "Ø50cm", material: "Rustfritt (304L)", details: "", price: "4 500,- + mva.", image: "/assets/sveising.png" },
  { id: 6, name: "Bålpanne i rustfritt stål", size: "Ø50cm", material: "Rustfritt (304L)", details: "", price: "3 800,- + mva.", image: "/assets/sveising.png" },
  { id: 7, name: "Ferist", size: "2 x 4m", material: "Karbonstål", details: "", price: "45 000,- + mva.", image: "/assets/forprosjekt.png" },
];

export const metadata: Metadata = {
  title: "Produkter",
  description: "Egenproduserte produkter i rustfritt stål: væsketraller, bålpanner, utepeis og ferist.",
  alternates: { canonical: "/produkter" },
};

export default function Produkter() {
  return (
    <div>
      <Navigation />
      <main id="innhold">

      <PageHeader
        title={<>Våre <span className="text-accent">produkter</span></>}
        lede="Egenproduserte produkter i rustfritt stål, bygget for å vare."
        image="/assets/tralle_staende.png"
      />

      {/* Product grid — flat tiles, spec block, hairline separation */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pb-8 mb-12 border-b-2 border-ink">
            <p className="text-sm text-muted">Frakt kommer i tillegg.</p>
            <div className="flex gap-2 sm:ml-auto">
              <a
                href="tel:99504311"
                className="px-5 py-2.5 bg-accent text-accent-ink text-[13px] font-semibold hover:bg-accent-hover active:translate-y-px transition-all"
              >
                Ring for bestilling
              </a>
              <a
                href="mailto:tore@3ts.no"
                className="px-5 py-2.5 border border-line-strong text-[13px] font-semibold hover:border-ink active:translate-y-px transition-all"
              >
                E-post
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={(i % 3) * 60}>
                <article className="group flex flex-col h-full bg-surface border border-line hover:border-line-strong transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                    <Image
                      src={getImagePath(p.image)}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-0 top-0 h-full w-1 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  </div>

                  <h2 className="text-lg font-semibold tracking-tight px-6 pt-6 pb-4">{p.name}</h2>

                  <dl className="text-sm border-t border-line mx-6 mb-5">
                    <div className="flex justify-between gap-4 py-2.5 border-b border-line">
                      <dt className="text-muted">Størrelse</dt>
                      <dd className="font-mono text-right">{p.size}</dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5 border-b border-line">
                      <dt className="text-muted">Materiale</dt>
                      <dd className="text-right">{p.material}</dd>
                    </div>
                    {p.details && (
                      <div className="flex justify-between gap-4 py-2.5 border-b border-line">
                        <dt className="text-muted">Detaljer</dt>
                        <dd className="text-right">{p.details}</dd>
                      </div>
                    )}
                  </dl>

                  <p className="mt-auto font-mono text-2xl tracking-tight px-6 pb-6">{p.price}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
