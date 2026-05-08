
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Cpu, Brain, Laptop } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creative Developer | Future Engineer | Problem Solver";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow delay-700" />
      
      {/* Floating Tech Icons */}
      <div className="absolute top-20 right-[10%] animate-float delay-100">
        <Brain className="w-12 h-12 text-primary opacity-30" />
      </div>
      <div className="absolute bottom-[20%] left-[15%] animate-float delay-300">
        <Cpu className="w-10 h-10 text-accent opacity-30" />
      </div>
      <div className="absolute top-[40%] left-[5%] animate-float delay-500">
        <Laptop className="w-8 h-8 text-primary opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="inline-block p-1 px-3 mb-6 rounded-full bg-primary/10 border border-primary/20 animate-reveal">
          <span className="text-sm font-medium text-primary">👋 Welcome to my digital space</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-headline font-bold mb-6 tracking-tight animate-reveal">
          I&apos;m <span className="gradient-text">Dana Retardo</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[1.5em] animate-reveal">
          {displayText}
          <span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-1" />
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 w-full sm:w-auto"
          >
            <a href="#projects">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 gap-2 border-primary/30 hover:bg-primary/5 w-full sm:w-auto"
          >
            <a href="/dana.pdf" download="Dana-Resume.pdf">
              Download Resume <Download className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
