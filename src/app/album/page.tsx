'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { albumImages } from "@/lib/albumImages";
import { getImagePath } from "@/lib/images";

export default function Album() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Glimt fra hverdagen</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">
            Fra <span className="text-red-500">verkstedet</span> vårt
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Sveising pågår! Her er utvalgte bilder fra våre tidligere prosjekter.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {albumImages.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 100}>
                <div className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg group bg-slate-100">
                  <Image
                    src={getImagePath(`/assets/album/${img}`)}
                    alt={`Prosjektbilde ${i + 1}`}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                        Prosjektbilde
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-white mb-4">Likte du det du så?</h2>
            <p className="text-red-100 text-xl mb-10">Kontakt oss for å høre hvordan vi kan bistå med ditt prosjekt.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt" className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-slate-100 transition-all text-lg shadow-xl shadow-red-900/20">
                Kontakt oss
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
