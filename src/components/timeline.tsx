
"use client";

import { Badge } from "@/components/ui/badge";
import { Award, School, Trophy, Rocket } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "Regional Hackathon Winner",
    org: "TechInnovate Philippines",
    desc: "Led a team of 4 to build an AI-driven disaster response prototype, securing first place among 50 competing teams.",
    icon: Trophy,
    type: "Award"
  },
  {
    year: "2023",
    title: "Dean's List Awardee",
    org: "College of Engineering",
    desc: "Maintained a consistent GPA of 1.25, demonstrating academic excellence in Computer Engineering core subjects.",
    icon: School,
    type: "Academic"
  },
  {
    year: "2023",
    title: "Robotics Research Lead",
    org: "University Robotics Lab",
    desc: "Spearheaded research on swarming algorithms for small-scale autonomous rovers.",
    icon: Rocket,
    type: "Role"
  },
  {
    year: "2022",
    title: "Certified Python Professional",
    org: "Python Institute",
    desc: "Successfully cleared the professional certification for advanced software development in Python.",
    icon: Award,
    type: "Certification"
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-headline font-bold mb-16 text-center">My <span className="text-primary">Journey</span></h2>
        
        <div className="relative border-l-2 border-primary/20 ml-6 pl-12 space-y-16">
          {achievements.map((item, idx) => (
            <div key={idx} className="relative animate-reveal" style={{ animationDelay: `${idx * 200}ms` }}>
              {/* Dot */}
              <div className="absolute -left-[61px] top-0 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_hsl(var(--primary))] z-10" />
              
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-24 h-24" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 rounded-full">
                    {item.type}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-headline font-bold mb-2">{item.title}</h3>
                <p className="text-primary/70 font-medium mb-4">{item.org}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
