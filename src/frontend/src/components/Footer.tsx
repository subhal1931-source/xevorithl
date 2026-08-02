import { Link } from "@tanstack/react-router";

const trustLinks = [
  { label: "Projects", path: "/projects" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Disclaimer", path: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="relative glass-effect border-t border-accent/20 shadow-[0_-1px_30px_rgba(0,200,255,0.06)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className="text-sm text-muted-foreground/70 transition-all duration-300 hover:text-accent hover:drop-shadow-[0_0_8px_oklch(var(--accent)/0.8)] relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent/60 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/50 font-mono">
          &copy; {new Date().getFullYear()} · Grow up with us
        </p>
      </div>
    </footer>
  );
}
