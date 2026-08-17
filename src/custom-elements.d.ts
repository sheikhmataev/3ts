import type * as React from "react";

type MashCreditProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  lang?: string;
  variant?: "bar" | "minimal";
  theme?: "auto" | "light" | "dark";
  href?: string;
  label?: string;
  services?: string;
  location?: string;
  org?: string;
  accent?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "mash-credit": MashCreditProps;
    }
  }
}
