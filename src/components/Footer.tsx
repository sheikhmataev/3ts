import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image src="/assets/logo.png" alt="3TS Logo" width={120} height={40} className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              3TS Industriservice AS — Sertifiserte norske sveisere med over 25 års erfaring. Spesialisert på prosessanlegg og næringsmiddelindustrien.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="tel:91546834" className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +47 915 46 834
              </a>
              <a href="mailto:kontakt@3ts.no" className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kontakt@3ts.no
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Sider</h3>
            <ul className="space-y-2">
              {[
                { href: "/tjenester", label: "Tjenester" },
                { href: "/produkter", label: "Produkter" },
                { href: "/om-oss", label: "Om oss" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/faktura", label: "Faktura" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Info</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Industrigata 50, 2619 Lillehammer</li>
              <li>Org.nr: 975 339 793</li>
              <li>13 ansatte • Sertifisert siden 1997</li>
              <li className="pt-2">
                <Link href="/kontakt" className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Få tilbud
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 3TS Industriservice AS. Alle rettigheter forbeholdt.</p>
          <p className="text-slate-600 text-xs">Stiftet 1995 · Gjøvik, Norge</p>
        </div>
      </div>
    </footer>
  );
}
