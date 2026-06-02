import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen bg-background overflow-hidden">
      {/* Ambient background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Top-left cyan orb */}
        <div
          className="absolute -left-40 -top-40 h-[600px] w-[600px] animate-orb-drift rounded-full opacity-[0.18]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.22 200) 0%, oklch(0.70 0.25 250) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-right teal/blue orb */}
        <div
          className="absolute -bottom-60 -right-40 h-[700px] w-[700px] rounded-full opacity-[0.15]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.70 0.25 250) 0%, oklch(0.65 0.25 300) 45%, transparent 70%)",
            filter: "blur(100px)",
            animation: "orb-drift 16s ease-in-out infinite reverse",
          }}
        />
        {/* Center ambient glow */}
        <div
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.22 200) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "orb-drift 20s ease-in-out infinite",
          }}
        />
        {/* Top-right purple orb */}
        <div
          className="absolute -right-20 top-20 h-[350px] w-[350px] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 300) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "orb-drift 14s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col md:pl-64">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
