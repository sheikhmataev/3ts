import Image from "next/image";
import { getImagePath } from "@/lib/images";

interface PageHeaderProps {
  title: React.ReactNode;
  lede?: string;
  image?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, lede, image, children }: PageHeaderProps) {
  return (
    <header className="relative bg-band text-band-ink overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image src={getImagePath(image)} alt="" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-band via-band/85 to-band/40" />
        </div>
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="border-l-4 border-accent pl-6 lg:pl-8 max-w-3xl">
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-semibold">{title}</h1>
          {lede && <p className="lede text-band-muted text-base lg:text-lg mt-5 max-w-xl leading-relaxed">{lede}</p>}
        </div>
        {children && <div className="mt-9 pl-6 lg:pl-8">{children}</div>}
      </div>
    </header>
  );
}
