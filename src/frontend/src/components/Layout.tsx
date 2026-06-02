import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background: "#000",
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Ambient background orbs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-left cyan orb */}
        <div
          className="absolute -left-40 -top-40 h-[600px] w-[600px] animate-orb-drift rounded-full opacity-[0.14]"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.8) 0%, rgba(77,159,255,0.4) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-right purple orb */}
        <div
          className="absolute -bottom-60 -right-40 h-[700px] w-[700px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(77,159,255,0.3) 45%, transparent 70%)",
            filter: "blur(100px)",
            animation: "orb-drift 16s ease-in-out infinite reverse",
          }}
        />
        {/* Center ambient */}
        <div
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "orb-drift 20s ease-in-out infinite",
          }}
        />
        {/* Top-right teal orb */}
        <div
          className="absolute -right-20 top-20 h-[350px] w-[350px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, rgba(0,255,200,0.5) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "orb-drift 14s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main content — padded below navbar */}
      <div className="relative z-10 flex flex-1 flex-col pt-16">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
