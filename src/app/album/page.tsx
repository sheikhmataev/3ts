import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import AlbumGalleri from "@/components/AlbumGalleri";

export const metadata: Metadata = {
  title: "Prosjektalbum",
  description: "Bilder fra prosjekter utført av 3TS Industriservice AS.",
  alternates: { canonical: "/album" },
};

// Sammenlignbart datotall (YYYYMMDDHHMMSS) ut av filnavnet.
const timestamp = (filename: string) => {
  const p = filename.split("_");
  if (p.length >= 7 && p[1]?.length === 4 && !isNaN(Number(p[1]))) {
    return `${p[1]}${p[2]}${p[3]}${p[5]}${p[6]}${p[7] ? p[7].split(".")[0] : "00"}`;
  }
  return "0";
};

/**
 * Bildelista leses fra disk under bygg. Den håndskrevne lista lå etter
 * med tre filer som ikke fantes, og klienten dekket over det med en HEAD-
 * forespørsel per bilde ved oppstart. Nå kan lista ikke bli feil.
 */
function albumFiles() {
  const dir = path.join(process.cwd(), "public", "assets", "album");
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => timestamp(b).localeCompare(timestamp(a)));
}

export default function Album() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="innhold">
      <PageHeader title="Prosjektalbum" />
      <AlbumGalleri images={albumFiles()} />
      </main>
      <Footer />
    </div>
  );
}
