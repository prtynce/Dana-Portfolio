
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
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);

      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-2" : "bg-transparent py-4"
    )}>
      <div className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 className="text-primary w-6 h-6" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:block">
            Dana<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-reveal" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-primary hover:bg-primary/10"
            onClick={() => {
              const audio = audioRef.current;
              if (!audio) return;

              if (audio.paused) {
                // Set infinite loop + play
                audio.loop = true;
                audio.play().catch(() => {
                  // ignore autoplay restrictions; user gesture should usually allow it
                });
              } else {
                audio.pause();
              }
            }}
            aria-label="Play/Pause music"
          >
            <Music className="w-5 h-5" />
          </Button>

          <audio ref={audioRef} src="/dana-collection/music.mp3" preload="auto" />

          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 pt-20",
        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col items-center gap-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-headline font-bold hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
