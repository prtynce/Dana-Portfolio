"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Music } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Lab", href: "#lab" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((winScroll / height) * 100);

      const sections = navLinks.map((link) => link.href.substring(1));

      const current = sections.find((section) => {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }

        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-nav py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        {/* SCROLL PROGRESS */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-between">

          {/* LOGO - LEFT */}
          <div className="flex items-center z-20">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="text-primary w-6 h-6" />
              </div>

              <span className="font-headline font-bold text-xl tracking-tight">
                Dana<span className="text-primary">.</span>
              </span>
            </a>
          </div>

          {/* DESKTOP CENTER NAV */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}

                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-reveal" />
                )}
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 ml-auto z-20">

            {/* MUSIC */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-primary hover:bg-primary/10"
              onClick={() => {
                const audio = audioRef.current;

                if (!audio) return;

                if (audio.paused) {
                  audio.loop = true;

                  audio.play().catch(() => {});
                } else {
                  audio.pause();
                }
              }}
              aria-label="Play/Pause music"
            >
              <Music className="w-5 h-5" />
            </Button>

            <audio
              ref={audioRef}
              src="/dana-collection/music.mp3"
              preload="auto"
            />

            {/* DARK MODE */}
            <ThemeToggle />

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={cn(
          "md:hidden fixed top-20 right-4 z-40 transition-all duration-300 origin-top-right",
          mobileMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="glass-card backdrop-blur-xl border border-border/50 rounded-2xl p-4 w-52 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary",
                  activeSection === link.href.substring(1)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}