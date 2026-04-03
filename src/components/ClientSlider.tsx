'use client';

import { useState, useEffect } from "react";

interface ClientSliderProps {
  clients: string[];
  direction?: 'left' | 'right';
  speed?: string;
}

const clientDomains: Record<string, string> = {
  "Tine": "tine.no",
  "Q-meieriene": "q-meieriene.no",
  "Ringnes": "ringnes.no",
  "Coca Cola": "coca-cola.no",
  "Røra fabrikker": "rora.no",
  "Synnøve Finden": "synnove.no",
  "Spirax": "spiraxsarco.com",
  "Borg bryggeri": "hansaborg.no",
  "Nortura": "nortura.no",
  "Aass bryggeri": "aass.no",
  "Maarud": "maarud.no",
  "GEA": "gea.com",
  "Alfa Laval": "alfalaval.com",
  "Thomas Thiis": "thomas-thiis.no"
};

const ClientCard = ({ name }: { name: string }) => {
  const [imgError, setImgError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const domain = clientDomains[name];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex-shrink-0 bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 flex items-center justify-center hover:border-red-600/50 hover:bg-slate-700 transition-all min-w-[200px] h-24" suppressHydrationWarning>
      {domain ? (
        <>
          <img 
            src={`https://logo.clearbit.com/${domain}`} 
            alt={`${name} logo`} 
            className={`max-h-12 max-w-[120px] object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity ${imgError ? 'hidden' : 'block'}`}
            onError={() => setImgError(true)}
            suppressHydrationWarning
          />
          {imgError && <span className="text-slate-300 text-sm sm:text-base font-semibold text-center" suppressHydrationWarning>{name}</span>}
        </>
      ) : (
        <span className="text-slate-300 text-sm sm:text-base font-semibold text-center" suppressHydrationWarning>{name}</span>
      )}
    </div>
  );
};

export default function ClientSlider({ clients, direction = 'left', speed = '120s' }: ClientSliderProps) {
  const animationClass = direction === 'left' ? 'animate-slide-left' : 'animate-slide-right';
  
  return (
    <div className="relative flex overflow-hidden group">
      <div className={`${animationClass} flex gap-4 pr-4`} style={{ animationDuration: speed }}>
        {/* We output the list multiple times to ensure continuous sliding */}
        {[...clients, ...clients, ...clients].map((c, i) => (
          <ClientCard key={`${direction}-${i}`} name={c} />
        ))}
      </div>
    </div>
  );
}
