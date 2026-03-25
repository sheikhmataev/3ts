import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "3TS Industriservice AS - Sertifiserte sveisere for prosessindustrien",
    template: "%s | 3TS Industriservice AS"
  },
  description: "3TS Industriservice AS leverer komplette løsninger for prosessindustrien. Sertifiserte sveisere med over 25 års erfaring. Spesialisert på næringsmiddelindustrien.",
  keywords: [
    "3TS Industriservice",
    "sveising",
    "prosessindustri",
    "næringsmiddelindustri",
    "sertifiserte sveisere",
    "rustfritt stål",
    "tanker",
    "beholdere",
    "ventiler",
    "pumper",
    "3D tegning",
    "prosjektering",
    "service",
    "vedlikehold",
    "Gjøvik",
    "Hunndalen"
  ],
  authors: [{ name: "3TS Industriservice AS" }],
  creator: "3TS Industriservice AS",
  publisher: "3TS Industriservice AS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.3ts.no"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://www.3ts.no",
    title: "3TS Industriservice AS - Sertifiserte sveisere for prosessindustrien",
    description: "3TS Industriservice AS leverer komplette løsninger for prosessindustrien. Sertifiserte sveisere med over 25 års erfaring.",
    siteName: "3TS Industriservice AS",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "3TS Industriservice AS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3TS Industriservice AS - Sertifiserte sveisere for prosessindustrien",
    description: "3TS Industriservice AS leverer komplette løsninger for prosessindustrien. Sertifiserte sveisere med over 25 års erfaring.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
