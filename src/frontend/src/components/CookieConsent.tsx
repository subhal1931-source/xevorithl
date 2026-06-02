import { Cookie, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

const CONSENT_KEY = "xevorith_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:px-6"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div
        className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-white/10 p-5 shadow-2xl md:flex-row md:items-center md:gap-6"
        style={{
          background: "rgba(6, 8, 16, 0.96)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          borderTop: "2px solid rgba(0,212,255,0.35)",
          boxShadow:
            "0 -4px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.08)",
        }}
      >
        <div className="flex items-start gap-3 flex-1">
          <div
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg"
            style={{ background: "rgba(0,212,255,0.12)", color: "#00d4ff" }}
          >
            <Cookie className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              Cookies & Advertising
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/55">
              We use cookies for site functionality and display ads through{" "}
              <strong className="text-white/75">Google AdSense</strong>, which
              may personalise ads based on your visit. By clicking{" "}
              <strong className="text-white/75">Accept</strong> you consent to
              our{" "}
              <a
                href="/privacy"
                className="underline underline-offset-2 text-[#00d4ff]/80 hover:text-[#00d4ff] transition-colors"
              >
                Privacy Policy
              </a>{" "}
              and cookie use. You can opt out of personalised Google ads via{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 underline underline-offset-2 text-[#00d4ff]/80 hover:text-[#00d4ff] transition-colors"
              >
                Google Ad Settings <ExternalLink className="size-3" />
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/60 transition-all hover:border-white/30 hover:text-white/90"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full px-5 py-2 text-xs font-bold text-black transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #4d9fff)",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
            }}
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleDecline}
            aria-label="Close cookie notice"
            className="ml-1 flex size-7 items-center justify-center rounded-full text-white/30 transition hover:bg-white/10 hover:text-white/70"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
