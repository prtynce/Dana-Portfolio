
"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const categories = ["All", "AI", "Robotics", "Web", "Academic"];

const projects = [
  {
    title: "NeuroPath AI",
    category: "AI",
    description: "Real-time gesture recognition using neural networks to assist communication for individuals with disabilities.",
    image: PlaceHolderImages.find(i => i.id === 'project-ai')?.imageUrl || "",
    tags: ["Python", "TensorFlow", "OpenCV"],
    status: "Completed",
    links: { github: "#", live: "#" }
  },
  {
    title: "SwiftBot X1",
    category: "Robotics",
    description: "An autonomous warehouse navigation robot prototype featuring obstacle avoidance and pathfinding optimization.",
    image: PlaceHolderImages.find(i => i.id === 'project-robot')?.imageUrl || "",
    tags: ["C++", "Arduino", "ROS"],
    status: "Ongoing",
    links: { github: "#", live: "#" }
  },
  {
    title: "Lumina Portfolio",
    category: "Web",
    description: "A high-performance portfolio template designed with glassmorphism and advanced CSS animations.",
    image: PlaceHolderImages.find(i => i.id === 'project-web')?.imageUrl || "",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    status: "Concept",
    links: { github: "#", live: "#" }
  }
];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4">Featured <span className="text-primary">Creations</span></h2>
            <p className="text-muted-foreground">A curated selection of my technical and creative work.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-6 transition-all",
                  filter === cat ? "bg-primary text-white shadow-lg shadow-primary/30" : "hover:border-primary/50"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.title} className="group glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 animate-reveal" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={cn(
                    "rounded-full px-3 py-1",
                    project.status === "Completed" ? "bg-green-500/20 text-green-500" :
                    project.status === "Ongoing" ? "bg-blue-500/20 text-blue-500" :
                    "bg-orange-500/20 text-orange-500"
                  )}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
