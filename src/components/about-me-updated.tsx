"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React / Next.js", value: 85 },
  { name: "Python", value: 90 },
  { name: "Robotics / Arduino", value: 75 },
  { name: "Circuit Design", value: 80 },
  { name: "UI/UX Design", value: 70 },
];

const tags = ["React", "Python", "Arduino", "TypeScript", "C++", "Vercel", "Firebase", "AutoCAD", "MATLAB"];

export function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const profileImg = PlaceHolderImages.find(i => i.id === 'profile-pic');

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Interactive Profile Card */}
          <div className="relative group perspective-1000">
            <div className="relative z-10 transform group-hover:rotate-y-12 transition-transform duration-500 ease-out">
              <Card className="glass-card overflow-hidden rounded-[2rem] p-4">
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden">
                  <Image
                    src={profileImg?.imageUrl || ""}
                    alt="Dana profile"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint="professional woman profile"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-lg font-medium">Dana Eunice P. Retardo</p>
                  </div>
                </div>
              </Card>
            </div>
            {/* Background accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                Engineering <span className="text-primary">Elegance</span> with Code
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a 3rd Year Computer Engineering student, I bridge the gap between complex hardware systems and intuitive digital experiences. My passion lies at the intersection of AI, Robotics, and Web Development.
              </p>
              
              <div className={cn(
                "overflow-hidden transition-all duration-500",
                isExpanded ? "max-h-[500px]" : "max-h-0"
              )}>
                <p className="text-muted-foreground leading-relaxed pt-2">
                  I believe that technology should not only be functional but also beautiful. Whether I'm building a neural network or designing a PCB, I bring a touch of creativity and meticulous attention to detail to every project.
                </p>
              </div>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary font-semibold hover:underline mt-2 text-sm uppercase tracking-wider"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-headline font-semibold">Technical Proficiency</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-muted rounded-full" />
                </div>
              ))}
            </div>

            {/* Cloud Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/20 px-4 py-1 rounded-full hover:bg-primary/10 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Resume Download */}
            <div className="pt-6">
              <Button asChild size="lg" className="rounded-2xl shadow-lg shadow-primary/30 w-full md:w-auto">
                <a href="/dana.pdf" download="Dana-Resume.pdf" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
