'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getImagePath } from "@/lib/images";

const navItems = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/produkter", label: "Produkter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/faktura", label: "Faktura" },
  { href: "/album", label: "Album" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Sentinel beats a scroll listener: no work on frames where nothing crossed.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute top-0 h-px w-full" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
          pinned
            ? "bg-paper/90 backdrop-blur-md border-line"
            : "bg-paper border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0" aria-label="3TS Industriservice, til forsiden">
              <Image src={getImagePath("/assets/logo.png")} alt="3TS Industriservice" width={110} height={31} className="h-7 w-auto" priority />
            </Link>

            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative px-3 py-5 text-[13px] font-medium tracking-tight text-muted hover:text-ink transition-colors"
                >
                  {item.label}
                  <span
                    className={`absolute left-3 right-3 bottom-3.5 h-[2px] bg-accent origin-left transition-transform duration-200 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              ))}
              <Link
                href="/kontakt#kontakt-skjema"
                className="ml-5 px-5 py-2.5 bg-accent text-accent-ink text-[13px] font-semibold tracking-tight hover:bg-accent-hover active:translate-y-px transition-all"
              >
                Få tilbud
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2 gap-[5px]"
              aria-label={isMenuOpen ? "Lukk meny" : "Åpne meny"}
              aria-expanded={isMenuOpen}
            >
              <span className={`block w-5 h-[2px] bg-ink transition-transform duration-200 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-ink transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-ink transition-transform duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-band/60 transition-opacity duration-200 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-50 bg-surface border-l border-line flex flex-col transition-transform duration-300 ease-out lg:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-line">
          <Image src={getImagePath("/assets/logo.png")} alt="3TS Industriservice" width={90} height={25} className="h-6 w-auto" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 -mr-2 text-muted hover:text-ink transition-colors"
            aria-label="Lukk meny"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center gap-3 px-5 py-4 text-sm font-medium border-b border-line transition-colors ${
                isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <span className={`w-[3px] h-4 ${isActive(item.href) ? "bg-accent" : "bg-transparent"}`} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 space-y-3 border-t border-line">
          <Link
            href="/kontakt#kontakt-skjema"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full py-3 bg-accent text-accent-ink text-center text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Få tilbud
          </Link>
          <a
            href="tel:90933503"
            className="block w-full py-3 border border-line-strong text-ink text-center text-sm font-mono hover:border-ink transition-colors"
          >
            909 33 503
          </a>
        </div>
      </div>
    </>
  );
}
