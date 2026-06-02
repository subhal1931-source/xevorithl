import { Link } from "@tanstack/react-router";

const trustLinks = [
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Disclaimer", path: "/disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/60">
          Built with love using{" "}
          <a
            href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=xevorith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/80 hover:text-accent"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
