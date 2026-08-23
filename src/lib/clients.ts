/**
 * Kundereferanser.
 *
 * `logo` er valgfri og peker på en fil i /public/assets/kunder/.
 * Uten fil settes navnet som ordmerke i stedet. Merkene er hentet fra
 * kundenes egne nettsider og vises i originalfarger på lys flate.
 */
export interface Client {
  name: string;
  logo?: string;
}

export const clients: Client[] = [
  { name: "Tine", logo: "/assets/kunder/tine.svg" },
  { name: "Q-meieriene" },
  { name: "Ringnes", logo: "/assets/kunder/ringnes.png" },
  { name: "Coca Cola", logo: "/assets/kunder/coca-cola.png" },
  { name: "Røra fabrikker", logo: "/assets/kunder/rora.png" },
  { name: "Synnøve Finden", logo: "/assets/kunder/synnove.png" },
  { name: "Spirax", logo: "/assets/kunder/spirax.png" },
  // Hansa Borg publiserer bare konsernmerket HBB, ikke et eget Borg-merke.
  { name: "Borg bryggeri" },
  { name: "Atna bryggeri" },
  { name: "Lillehammer Ysteri" },
  { name: "Nortura", logo: "/assets/kunder/nortura.svg" },
  { name: "Aass bryggeri", logo: "/assets/kunder/aass.svg" },
  { name: "Maarud", logo: "/assets/kunder/maarud.svg" },
  { name: "GEA", logo: "/assets/kunder/gea.svg" },
  { name: "Alfa Laval", logo: "/assets/kunder/alfa-laval.svg" },
  { name: "Thomas Thiis", logo: "/assets/kunder/thomas-thiis.png" },
];
