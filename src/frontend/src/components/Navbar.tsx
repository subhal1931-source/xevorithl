"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Cpu, Home, Info, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Tutorials", path: "/tutorials", icon: BookOpen },
  { label: "About", path: "/about", icon: Info },
  { label: "Contact", path: "/contact", icon: Mail },
];

export function Navbar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(0,212,255,0.12)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(0,212,255,0.08)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative">
            <Cpu
              className="size-7 text-[#00d4ff] transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(0,212,255,0.9)]"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,212,255,0.7))" }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-lg font-bold tracking-tight text-white"
              style={{
                textShadow:
                  "0 0 20px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.3)",
              }}
            >
              Xevorith
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#00d4ff]/60">
              Engineering Lab
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "text-[#00d4ff]"
                    : "text-white/60 hover:text-white",
                )}
                style={
                  isActive
                    ? {
                        background: "rgba(0,212,255,0.1)",
                        border: "1px solid rgba(0,212,255,0.3)",
                        backdropFilter: "blur(12px)",
                        boxShadow:
                          "0 0 18px rgba(0,212,255,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                        textShadow: "0 0 12px rgba(0,212,255,0.8)",
                      }
                    : {
                        background: "transparent",
                        border: "1px solid transparent",
                      }
                }
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-px left-1/2 h-px w-3/4 -translate-x-1/2 rounded-full bg-[#00d4ff]/60" />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link to="/contact" className="ml-3">
            <button
              type="button"
              className="rounded-full px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #4d9fff)",
                boxShadow:
                  "0 0 24px rgba(0,212,255,0.4), 0 0 48px rgba(0,212,255,0.15)",
              }}
            >
              Get in Touch
            </button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 text-white hover:bg-white/10 rounded-full"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] p-0"
              style={{
                background: "rgba(0,0,0,0.92)",
                backdropFilter: "blur(40px)",
                borderLeft: "1px solid rgba(0,212,255,0.15)",
              }}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation links</SheetDescription>
              <div className="flex h-full flex-col">
                <div
                  className="flex items-center justify-between border-b px-5 py-4"
                  style={{ borderColor: "rgba(0,212,255,0.12)" }}
                >
                  <div className="flex items-center gap-2">
                    <Cpu
                      className="size-5 text-[#00d4ff]"
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(0,212,255,0.7))",
                      }}
                    />
                    <span className="font-display text-base font-bold text-white">
                      Xevorith
                    </span>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 text-white/50 hover:text-white"
                    >
                      <X className="size-4" />
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col gap-1 px-3 py-4">
                  {navItems.map((item) => {
                    const isActive = currentPath === item.path;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300",
                          isActive
                            ? "text-[#00d4ff]"
                            : "text-white/60 hover:text-white hover:bg-white/5",
                        )}
                        style={
                          isActive
                            ? {
                                background: "rgba(0,212,255,0.1)",
                                border: "1px solid rgba(0,212,255,0.25)",
                                boxShadow: "0 0 14px rgba(0,212,255,0.15)",
                              }
                            : {}
                        }
                      >
                        <Icon
                          className={cn(
                            "size-4 shrink-0",
                            isActive ? "text-[#00d4ff]" : "text-white/40",
                          )}
                        />
                        {item.label}
                        {isActive && (
                          <span className="ml-auto size-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div
                  className="mt-auto border-t px-4 py-4"
                  style={{ borderColor: "rgba(0,212,255,0.12)" }}
                >
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    <button
                      type="button"
                      className="w-full rounded-full py-2.5 text-sm font-semibold text-black"
                      style={{
                        background: "linear-gradient(135deg, #00d4ff, #4d9fff)",
                        boxShadow: "0 0 20px rgba(0,212,255,0.35)",
                      }}
                    >
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
