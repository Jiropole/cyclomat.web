import Link from "next/link";
import { CopyrightYear } from "./copyright-year";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Gallery", href: "/gallery" },
      { label: "Export & Share", href: "/export" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Getting Started", href: "/learn" },
      { label: "Layers & Color", href: "/learn#layers-and-color" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Docs",
    links: [
      // { label: "Manual", href: "/manual" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Cyclomat
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Create complex, beautiful geometric artwork through harmonic
              motion. No equations needed.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-sm font-semibold">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <div className="mt-12 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p>
            <Link
              href={"/privacy"}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              We take privacy seriously.
            </Link>            
          </p>
        </div> */}
        <div className="mt-12 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          {/* <p>
            <Link
              href={"/privacy"}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              We take privacy seriously.
            </Link>            
          </p> */}
          <p>
            &copy; <CopyrightYear /> OctaveWare LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
