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
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [isMounted, setIsMounted] = useState(false);
  const domain = clientDomains[name];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const TextFallback = () => (
    <span className="text-slate-300 text-sm sm:text-base font-semibold text-center select-none uppercase tracking-wide">
      {name}
    </span>
  );

  return (
    <div 
      className="flex-shrink-0 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 sm:px-6 py-4 flex items-center justify-center hover:border-red-600/50 hover:bg-slate-700 transition-all min-w-[140px] sm:min-w-[200px] h-16 sm:h-24 pointer-events-none sm:pointer-events-auto" 
      suppressHydrationWarning
    >
      {!isMounted ? (
        <TextFallback />
      ) : domain && imgStatus !== 'error' ? (
        <div className="relative w-full h-full flex items-center justify-center">
          {imgStatus === 'loading' && <div className="absolute inset-0 flex items-center justify-center"><div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div></div>}
          <img 
            /* Bruker en mer pålitelig bilde-proxy for logoer */
            src={`https://logo.clearbit.com/${domain}?size=200`} 
            alt={`${name} logo`} 
            className={`max-h-8 sm:max-h-12 max-w-[100px] sm:max-w-[140px] object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-500 ${imgStatus === 'loaded' ? 'scale-100 opacity-70' : 'scale-90 opacity-0'}`}
            onLoad={() => setImgStatus('loaded')}
            onError={() => {
              console.warn(`Could not load logo for ${name}`);
              setImgStatus('error');
            }}
            suppressHydrationWarning
          />
        </div>
      ) : (
        <TextFallback />
      )}
    </div>
  );
};

export default function ClientSlider({ clients, direction = 'left', speed = '120s' }: ClientSliderProps) {
  const animationClass = direction === 'left' ? 'animate-slide-left' : 'animate-slide-right';
  
  return (
    <div className="relative flex overflow-hidden group w-full">
      <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
      
      <div className={`${animationClass} flex gap-3 sm:gap-4 pr-3 sm:pr-4`} style={{ animationDuration: speed }}>
        {/* Trippele kopier for å sikre uendelig loop uten 'jump' */}
        {[...clients, ...clients, ...clients].map((c, i) => (
          <ClientCard key={`${direction}-${i}`} name={c} />
        ))}
      </div>
    </div>
  );
}
