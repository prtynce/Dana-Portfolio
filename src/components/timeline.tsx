
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Award, School, Trophy, Rocket } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const getAchievementImageUrl = (id?: string) => {
  if (!id) return "";
  return PlaceHolderImages.find((i) => i.id === id)?.imageUrl || "";
};

type AchievementItem = {
  year: string;
  title: string;
  org: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  type: string;
  imageId?: string;
};

const achievements: AchievementItem[] = [
  {
    year: "2019",
    title: "CAT Officer",
    org: "Landy National High School",
    desc: "Served as a Corps Officer demonstrating leadership, discipline, teamwork, and responsibility through military training activities and school-based programs.",
    icon: Trophy,
    type: "Award",
    imageId: "achievement-cat"
  },
  {
    year: "2020 – 2021",
    title: "Chief Girl Scout Medalist",
    org: "Girl Scouts",
    desc: "Recognized for outstanding leadership, service, discipline, and dedication as a Girl Scout, achieving one of the highest honors in scouting through active participation and excellence in various community and leadership activities.",
    icon: Award,
    type: "Recognition",
    imageId: "achievement-gsp"
  },
  {
    year: "2018 – 2022",
    title: "Ang Liwanag — Photojournalist",
    org: "Campus Journalism",
    desc: "Worked as a photojournalist responsible for capturing meaningful events and stories through photography, enhancing campus journalism with creative visual storytelling and media documentation.",
    icon: School,
    type: "Role",
    imageId: "achievement-journalism"
  },
  {
    year: "2021 – 2022",
    title: "RSPC Online Publishing (Filipino) — 1st Runner-Up",
    org: "Regional Schools Press Conference",
    desc: "Awarded 1st Runner-Up in the Regional Schools Press Conference for excellence in online publishing under the Filipino category, showcasing strong creativity, collaboration, and digital journalism skills.",
    icon: Trophy,
    type: "Award",
    imageId: "achievement-rspc"
  },
  {
    year: "2023 – 2025",
    title: "The Matrix Today — Photojournalist / Content Creator",
    org: "Student Media",
    desc: "Contributed as a photojournalist and content creator by producing engaging visual and digital content, documenting campus activities, and promoting student involvement through creative media production.",
    icon: Rocket,
    type: "Role",
    imageId: "achievement-tmt"
  },
  {
    year: "2024 – 2025",
    title: "MarSU.ICpEP.SE A.Y. 2024–2025 — Auditor",
    org: "ICpEP SE",
    desc: "Served as the Auditor of the Institute of Computer Engineers of the Philippines – Student Edition, ensuring proper financial monitoring, transparency, and accountability within the organization.",
    icon: Award,
    type: "Leadership",
    imageId: "achievement-auditor"
  },
  {
    year: "2025 – 2026",
    title: "MarSU.ICpEP.SE A.Y. 2025–2026 — Vice President for Education",
    org: "ICpEP SE",
    desc: "Currently serving as Vice President for Education, leading academic-related initiatives, supporting student learning and development, and organizing educational programs that strengthen the skills and knowledge of Computer Engineering students.",
    icon: School,
    type: "Leadership",
    imageId: "achievement-vp"
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

                <div className="flex items-start gap-6 mb-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-primary/20 bg-background/40 flex-shrink-0">
                    {item.imageId && getAchievementImageUrl(item.imageId) ? (
                      <Image
                        src={getAchievementImageUrl(item.imageId)}
                        alt={`${item.title} photo`}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>

                  <div className="flex items-center gap-4 mb-0 flex-wrap">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 rounded-full">
                      {item.type}
                    </Badge>
                  </div>
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
