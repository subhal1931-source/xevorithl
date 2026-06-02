"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
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
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[0_0_12px_oklch(var(--accent)/0.25)]"
                : "text-sidebar-foreground/80",
            )}
            onClick={() => setMobileOpen(false)}
          >
            <Icon
              className={cn("size-4 shrink-0", isActive && "text-accent")}
            />
            <span>{item.label}</span>
            {isActive && (
              <span className="ml-auto size-1.5 rounded-full bg-accent shadow-[0_0_6px_oklch(var(--accent)/0.8)]" />
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
            className="w-[280px] border-r border-border/40 bg-background/95 p-0 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3 border-b border-border/30 px-5 py-4">
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
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-border/30 bg-sidebar/80 backdrop-blur-xl md:flex">
        <div className="flex items-center gap-3 border-b border-border/30 px-5 py-5">
          <Cpu className="size-7 text-accent" />
          <span className="font-display text-xl font-bold tracking-tight text-sidebar-foreground">
            Xevorith
          </span>
        </div>
        <div className="flex-1 overflow-auto py-2">{NavContent}</div>
        <div className="border-t border-border/30 px-5 py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Xevorith
          </p>
        </div>
      </aside>
    </>
  );
}
