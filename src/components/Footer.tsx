import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getImagePath } from "@/lib/images";

const pages = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/produkter", label: "Produkter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/faktura", label: "Faktura" },
  { href: "/album", label: "Album" },
];

export default function Footer() {
  return (
    <footer className="bg-band text-band-ink">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image src={getImagePath("/assets/logo.png")} alt="3TS Industriservice" width={120} height={33} className="h-8 w-auto mb-6" />
            <p className="text-band-muted text-sm leading-relaxed max-w-xs lede">
              3TS Industriservice AS. Sertifiserte norske sveisere med over 25 års erfaring. Spesialisert på prosessanlegg og næringsmiddelindustrien.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-band-muted text-[11px] font-semibold uppercase tracking-[0.16em] mb-5">Sider</h2>
            <ul className="space-y-3">
              {pages.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-band-ink/80 hover:text-accent text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-band-muted text-[11px] font-semibold uppercase tracking-[0.16em] mb-5">Kontakt</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:90933503" className="font-mono text-band-ink hover:text-accent transition-colors">+47 909 33 503</a>
              </li>
              <li>
                <a href="mailto:geir@3ts.no" className="text-band-ink hover:text-accent transition-colors">geir@3ts.no</a>
              </li>
              <li className="text-band-muted pt-1">Industrigata 50, 2619 Lillehammer</li>
              <li className="text-band-muted font-mono text-xs">Org.nr 975 339 793</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-band-muted text-xs">© 2026 3TS Industriservice AS. Alle rettigheter forbeholdt.</p>
          <mash-credit lang="nb" variant="minimal"></mash-credit>
        </div>
      </div>
      <Script src={getImagePath("/assets/mash-credit.js")} strategy="afterInteractive" />
    </footer>
  );
}
