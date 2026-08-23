import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import KontaktSkjema from "@/components/KontaktSkjema";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Ta kontakt med 3TS Industriservice AS for en uforpliktende samtale om ditt prosjekt.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <div>
      <Navigation />
      <main id="innhold">

      <PageHeader
        title={<>La oss <span className="text-accent">snakke</span></>}
        lede="Ta kontakt med vårt team for en uforpliktende samtale om ditt prosjekt."
      />

      <KontaktSkjema />

      </main>
      <Footer />
    </div>
  );
}
