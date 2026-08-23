import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <main id="innhold">

      <section className="min-h-[60vh] flex items-center py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="border-l-4 border-accent pl-6 lg:pl-8 max-w-xl">
            <p className="font-mono text-xs text-muted mb-4">404</p>
            <h1 className="display text-4xl lg:text-5xl font-semibold mb-5">Siden finnes ikke</h1>
            <p className="lede text-muted leading-relaxed mb-8">
              Siden du leter etter er flyttet eller fjernet.
            </p>
            <Link
              href="/"
              className="inline-block px-7 py-3.5 bg-accent text-accent-ink font-semibold hover:bg-accent-hover active:translate-y-px transition-all"
            >
              Til forsiden
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
