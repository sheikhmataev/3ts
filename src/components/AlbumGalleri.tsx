'use client';

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { getImagePath } from "@/lib/images";

// Viser dato fra filnavnet i pent format.
const getDateFromFilename = (filename: string) => {
  const parts = filename.split('_');
  if (parts.length >= 4) {
    const [, year, month, day] = parts;
    if (year?.length === 4 && month?.length === 2 && day?.length === 2) {
      const months = ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"];
      return `${parseInt(day)}. ${months[parseInt(month) - 1]} ${year}`;
    }
  }
  return null;
};

export default function AlbumGalleri({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = useCallback(() => {
    setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, nextImage, prevImage]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <p className="text-muted py-20 border-t border-line">Ingen bilder å vise akkurat nå.</p>
          ) : (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
              {images.map((img, i) => (
                <ScrollReveal key={img} delay={(i % 4) * 50}>
                  <button
                    type="button"
                    className="break-inside-avoid mb-4 relative block w-full overflow-hidden bg-surface border border-line group cursor-pointer"
                    onClick={() => setSelectedIndex(i)}
                    aria-label={`Åpne bilde ${i + 1} av ${images.length}`}
                  >
                    <Image
                      src={getImagePath(`/assets/album/${img}`)}
                      alt=""
                      width={600}
                      height={800}
                      loading={i < 8 ? "eager" : "lazy"}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 ring-inset ring-accent group-hover:ring-2 transition-all pointer-events-none" />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedIndex !== null && images.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-paper flex flex-col items-center justify-center select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Bildevisning"
        >
          <div className="absolute inset-0 z-0" onClick={() => setSelectedIndex(null)} />

          <button
            className="absolute top-6 right-6 z-[120] p-2 text-ink hover:text-muted active:translate-y-px transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            aria-label="Lukk"
          >
            <svg className="w-7 h-7 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute inset-0 z-10 flex">
            <div className="w-1/2 h-full cursor-w-resize" onClick={(e) => { e.stopPropagation(); prevImage(); }} />
            <div className="w-1/2 h-full cursor-e-resize" onClick={(e) => { e.stopPropagation(); nextImage(); }} />
          </div>

          <div className="relative w-full h-[72vh] px-6 flex items-center justify-center z-0 pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src={getImagePath(`/assets/album/${images[selectedIndex]}`)}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-24 sm:bottom-14 left-0 right-0 z-[110] flex flex-col items-center gap-2 pointer-events-none">
            <span className="w-6 h-[2px] bg-accent" />
            {getDateFromFilename(images[selectedIndex]) && (
              <p className="font-mono text-sm text-ink">{getDateFromFilename(images[selectedIndex])}</p>
            )}
            <p className="font-mono text-xs text-muted tabular-nums">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>

          <div className="absolute bottom-8 flex gap-3 sm:hidden z-[120]">
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="p-4 border border-line-strong bg-surface text-ink active:translate-y-px transition-transform cursor-pointer"
              aria-label="Forrige bilde"
            >
              <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="p-4 border border-line-strong bg-surface text-ink active:translate-y-px transition-transform cursor-pointer"
              aria-label="Neste bilde"
            >
              <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
