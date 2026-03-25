'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Produkter() {
  const products = [
    {
      id: 1,
      name: "Rustfri væsketralle stående",
      size: "250l.",
      material: "Rustfritt (304L)",
      details: "51mm kuleventil på utslipp",
      price: "10 000,- + mva.",
      image: "/tralle_staende.png"
    },
    {
      id: 2,
      name: "Rustfri væsketralle liggende",
      size: "300l.",
      material: "Rustfritt (304L)",
      details: "51mm kuleventil på utslipp",
      price: "18 000,- + mva.",
      image: "/tralle_liggende.png"
    },
    {
      id: 3,
      name: "Bålpanne i rustfritt stål",
      size: "Ø50cm x 54.3cm",
      material: "Rustfritt (304L)",
      details: "",
      price: "1 500,- + mva.",
      image: "/sveising.png"
    },
    {
      id: 4,
      name: "Bålpanne i rustfritt stål",
      size: "Ø50cm x 27cm",
      material: "Rustfritt (304L)",
      details: "",
      price: "1 500,- + mva.",
      image: "/sveising.png"
    },
    {
      id: 5,
      name: "Utepeis i rustfritt stål",
      size: "Ø50cm",
      material: "Rustfritt (304L)",
      details: "",
      price: "4 500,- + mva.",
      image: "/sveising.png"
    },
    {
      id: 6,
      name: "Bålpanne i rustfritt stål",
      size: "Ø50cm",
      material: "Rustfritt (304L)",
      details: "",
      price: "3 800,- + mva.",
      image: "/sveising.png"
    },
    {
      id: 7,
      name: "Ferist",
      size: "2 x 4m",
      material: "Karbonstål",
      details: "",
      price: "45 000,- + mva.",
      image: "/forprosjekt.png"
    }
  ];

  return (
    <div className="bg-white">
      <Navigation />

      <section className="relative pt-16 bg-slate-900">
        <div className="absolute inset-0">
          <Image src="/tralle_staende.png" alt="Produkter" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Produkter</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">
            Våre <span className="text-red-500">produkter</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Egenproduserte produkter i rustfritt stål — bygget for å vare.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white font-semibold">{product.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p><strong>Størrelse:</strong> {product.size}</p>
                    <p><strong>Materiale:</strong> {product.material}</p>
                    {product.details && <p><strong>Detaljer:</strong> {product.details}</p>}
                  </div>
                  <p className="text-2xl font-bold text-red-600 mb-2">{product.price}</p>
                  <p className="text-sm text-gray-500 mb-4">Frakt kommer i tillegg.</p>
                  <div className="flex gap-2">
                    <a href="tel:99504311" className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors text-center">
                      Ring for bestilling
                    </a>
                    <a href="mailto:tore@3ts.no" className="flex-1 bg-yellow-400 text-red-900 px-4 py-2 rounded-lg text-sm hover:bg-yellow-300 transition-colors text-center">
                      E-post
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kvalitet og leveranse
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Alle våre produkter er produsert med høyeste kvalitet og designet for industriell bruk. Vi bruker kun materialer av beste kvalitet og følger strenge kvalitetskontroller.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sertifisert kvalitet</h3>
                <p className="text-gray-600">Alle produkter er sertifisert og testet for industriell bruk</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rask levering</h3>
                <p className="text-gray-600">Effektiv produksjon og levering over hele landet</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tilpasning</h3>
                <p className="text-gray-600">Skreddersydde løsninger etter dine spesifikasjoner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Trenger du noe skreddersydd?</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Vi produserer også etter spesifikasjoner. Ta kontakt for et uforpliktende tilbud.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/kontakt" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all">Kontakt oss</Link>
                <a href="tel:99504311" className="px-8 py-4 bg-slate-700 border border-slate-600 text-white font-bold rounded-xl hover:bg-slate-600 transition-all">Ring: 99 50 43 11</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
