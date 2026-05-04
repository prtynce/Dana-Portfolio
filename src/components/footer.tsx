
"use client";

import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 group">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 className="text-primary w-5 h-5" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            Dana<span className="text-primary">.</span>
          </span>
        </div>
        
        <p className="text-lg font-medium text-muted-foreground mb-8 italic">
          &quot;Engineering solutions with creativity and heart <Heart className="inline w-4 h-4 text-primary fill-primary" />&quot;
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-primary/5">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dana Eunice P. Retardo. Built with passion & Next.js
          </p>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
