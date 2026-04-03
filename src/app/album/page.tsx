'use client';

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { albumImages } from "@/lib/albumImages";
import { getImagePath } from "@/lib/images";

// Hjelpefunksjon for å generere et sammenlignbart datotall (YYYYMMDDHHMMSS)
const getTimestampFromFilename = (filename: string) => {
  const parts = filename.split('_');
  if (parts.length >= 7) {
    const year = parts[1];
    const month = parts[2];
    const day = parts[3];
    const hour = parts[5]; // __17
    const min = parts[6];  // 11
    const sec = parts[7] ? parts[7].split('.')[0] : "00";
    
    // Sjekker at vi har tall
    if (!isNaN(Number(year)) && year.length === 4) {
      return `${year}${month}${day}${hour}${min}${sec}`;
    }
  }
  return "0";
};

// Hjelpefunksjon for å vise dato i pent format
const getDateFromFilename = (filename: string) => {
  const parts = filename.split('_');
  if (parts.length >= 4) {
    const year = parts[1];
    const month = parts[2];
    const day = parts[3];
    if (year.length === 4 && month.length === 2 && day.length === 2) {
      const months = ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"];
      return `${parseInt(day)}. ${months[parseInt(month)-1]} ${year}`;
    }
  }
  return null;
};

export default function Album() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkImages = async () => {
      // 1. Sorter etter tidsstempel (nyeste først)
      const sortedLibrary = [...albumImages].sort((a, b) => {
        const timeA = getTimestampFromFilename(a);
        const timeB = getTimestampFromFilename(b);
        return timeB.localeCompare(timeA);
      });

      // 2. Sjekk hvilke filer som faktisk finnes
      const results = await Promise.all(
        sortedLibrary.map(async (img) => {
          try {
            const res = await fetch(getImagePath(`/assets/album/${img}`), { method: 'HEAD' });
            return res.ok ? img : null;
          } catch {
            return null;
          }
        })
      );
      
      const filtered = results.filter((img): img is string => img !== null);
      setValidImages(filtered);
      setIsLoaded(true);
    };
    checkImages();
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIndex !== null && validImages.length > 0) {
      setSelectedIndex((selectedIndex + 1) % validImages.length);
    }
  }, [selectedIndex, validImages]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null && validImages.length > 0) {
      setSelectedIndex((selectedIndex - 1 + validImages.length) % validImages.length);
    }
  }, [selectedIndex, validImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedIndex]);

  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="border-l-2 border-red-600 pl-6">
            <span className="text-red-600 text-xs font-bold uppercase tracking-[0.3em] mb-2 block font-mono uppercase tracking-widest">ARC / VOL 1</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              PROSJEKTALBUM
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isLoaded ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {validImages.map((img, i) => (
                <ScrollReveal key={img} delay={(i % 4) * 50}>
                  <div 
                    className="break-inside-avoid relative rounded-sm overflow-hidden group cursor-pointer bg-slate-50 border border-slate-100/50 hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedIndex(i)}
                  >
                    <Image
                      src={getImagePath(`/assets/album/${img}`)}
                      alt="Project"
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && validImages.length > 0 && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-0 select-none">
          <div className="absolute inset-0 z-0 bg-white" onClick={() => setSelectedIndex(null)} />
          
          <button 
            className="absolute top-8 right-8 z-[120] text-slate-900 p-2 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
          >
            <svg className="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute inset-0 z-10 flex">
            <div className="w-1/2 h-full cursor-w-resize" onClick={(e) => { e.stopPropagation(); prevImage(); }} />
            <div className="w-1/2 h-full cursor-e-resize" onClick={(e) => { e.stopPropagation(); nextImage(); }} />
          </div>

          <div className="absolute left-10 z-20 text-slate-100 hidden md:block pointer-events-none">
             <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div className="absolute right-10 z-20 text-slate-100 hidden md:block pointer-events-none">
             <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.2} d="M9 5l7 7-7 7" /></svg>
          </div>

          <div className="relative w-full h-[75vh] flex flex-col items-center justify-center py-10 z-0 pointer-events-none">
            <div className="relative w-[95%] h-full">
              <Image
                src={getImagePath(`/assets/album/${validImages[selectedIndex]}`)}
                alt="Fullscreen"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="absolute -bottom-24 text-center w-full pointer-events-auto">
              <div className="h-[1px] w-6 bg-red-600 mx-auto mb-4"></div>
              {getDateFromFilename(validImages[selectedIndex]) && (
                <p className="text-slate-950 font-bold text-lg uppercase tracking-widest mb-1">
                  {getDateFromFilename(validImages[selectedIndex])}
                </p>
              )}
              <p className="text-slate-950 font-black text-sm tracking-widest uppercase">
                {selectedIndex + 1} / {validImages.length}
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 flex gap-12 md:hidden z-[120] pointer-events-auto">
             <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="text-slate-950 p-4 border border-slate-200 rounded-full bg-white active:bg-slate-100 shadow-sm cursor-pointer">
               <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
             </button>
             <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="text-slate-950 p-4 border border-slate-200 rounded-full bg-white active:bg-slate-100 shadow-sm cursor-pointer">
               <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
