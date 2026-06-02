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

export function Sidebar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavContent = (
    <nav className="flex flex-col gap-1 px-3 py-4">
      {navItems.map((item) => {
        const isActive = currentPath === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            data-ocid={`sidebar.nav.${item.label.toLowerCase()}_link`}
            className={cn(
              "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300",
              isActive
                ? [
                    "text-accent",
                    "border-l-2 border-accent pl-[10px]",
                    "bg-accent/10",
                    "shadow-[0_0_20px_oklch(var(--accent)/0.25),inset_0_1px_0_rgba(255,255,255,0.06)]",
                  ]
                : [
                    "text-sidebar-foreground/70 border-l-2 border-transparent pl-[10px]",
                    "hover:text-accent hover:bg-accent/8",
                    "hover:border-accent/50",
                    "hover:shadow-[0_0_15px_oklch(var(--accent)/0.15)]",
                  ],
            )}
            onClick={() => setMobileOpen(false)}
          >
            <Icon
              className={cn(
                "size-4 shrink-0 transition-all duration-300",
                isActive
                  ? "text-accent drop-shadow-[0_0_8px_oklch(var(--accent)/0.8)]"
                  : "text-sidebar-foreground/50 group-hover:text-accent",
              )}
            />
            <span className={cn(isActive && "neon-text")}>{item.label}</span>
            {isActive && (
              <span className="ml-auto size-1.5 rounded-full bg-accent animate-pulse-glow shadow-[0_0_8px_oklch(var(--accent)/1)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile hamburger trigger */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="glass-effect size-10 text-foreground hover:bg-accent/20"
              data-ocid="sidebar.mobile_menu_button"
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[280px] border-r border-accent/20 bg-background/90 p-0 glass-blur-48"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Site navigation links</SheetDescription>
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3 border-b border-accent/15 px-5 py-4">
                <Cpu className="size-6 text-accent" />
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  Xevorith
                </span>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto size-8 text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              {NavContent}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col glass-effect border-r border-accent/20 shadow-[2px_0_30px_rgba(0,200,255,0.08)] md:flex">
        <div className="flex items-center gap-3 border-b border-accent/15 px-5 py-5">
          <div className="relative">
            <Cpu className="size-7 text-accent drop-shadow-[0_0_10px_oklch(var(--accent)/0.9)]" />
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-md" />
          </div>
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-sidebar-foreground neon-text">
              Xevorith
            </span>
            <p className="text-[10px] text-accent/60 tracking-widest uppercase font-mono">
              Engineering Lab
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-2">{NavContent}</div>
        <div className="border-t border-accent/15 px-5 py-4">
          <p className="text-xs text-muted-foreground/60 font-mono">
            &copy; {new Date().getFullYear()} Xevorith
          </p>
        </div>
      </aside>
    </>
  );
}
