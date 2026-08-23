'use client';

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { clients } from "@/lib/clients";
import { getImagePath } from "@/lib/images";

/**
 * Kundelogoene i en uendelig sløyfe fra venstre mot høyre. Sløyfen er ren
 * CSS, mens parallaksen henger på scroll: to lag i ulik takt gir dybde
 * uten at noe hopper.
 *
 * Listen dupliseres én gang slik at et skift på 50% lander eksakt der
 * sløyfen startet. Ingen synlig skjøt.
 */
export default function ClientMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const run = [...clients, ...clients];

  return (
    <div ref={ref} className="client-strip relative overflow-hidden py-10">
      <motion.div style={reduce ? undefined : { x }}>
        <div className="client-track flex w-max items-center">
          {run.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="client-item flex-shrink-0 flex items-center justify-center px-8 sm:px-12"
              aria-hidden={i >= clients.length}
            >
              {client.logo ? (
                <span className="relative block h-9 sm:h-11 w-32 sm:w-40">
                  <Image
                    src={getImagePath(client.logo)}
                    alt={client.name}
                    fill
                    sizes="160px"
                    className="client-logo object-contain"
                  />
                </span>
              ) : (
                <span className="client-wordmark text-lg sm:text-xl tracking-tight whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Feather the ends so logos enter and leave instead of being chopped */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f7f7f5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f7f7f5] to-transparent" />
    </div>
  );
}
